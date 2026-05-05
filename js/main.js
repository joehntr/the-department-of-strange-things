// Project data - each project can have different height
const projects = [
    { title: "The Curious Cabinet", color: "#FFB6C1", height: "medium" },
    { title: "Whispers in the Attic", color: "#C0E0FF", height: "large" },
    { title: "The Clockwork Garden", color: "#D4F1D4", height: "small" },
    { title: "Strange Brew", color: "#FFD4A8", height: "medium" },
    { title: "The Lost Library", color: "#E0C0FF", height: "large" },
    { title: "Moonlit Menagerie", color: "#A8D8FF", height: "small" },
    { title: "Peculiar Pets", color: "#FFC8A2", height: "medium" },
    { title: "The Imaginary Map", color: "#C2E0C2", height: "large" },
    { title: "Forgotten Fairy Tales", color: "#FFB3BA", height: "small" },
    { title: "Strange New Thing", color: "#FFD4E8", height: "medium" },
    { title: "The Mystery Box", color: "#D4E0FF", height: "small" },
    { title: "Wonderland Tales", color: "#C8FFD4", height: "large" }
];

// Generate grid with masonry layout
const grid = document.getElementById('projectGrid');
if (grid) {
    // Clear grid
    grid.innerHTML = '';
    
    // Create all grid items first
    projects.forEach((project, index) => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.setAttribute('data-height', project.height);
        
        let heightClass = '';
        if (project.height === 'small') heightClass = 'height-small';
        else if (project.height === 'large') heightClass = 'height-large';
        else heightClass = 'height-medium';
        
        gridItem.innerHTML = `
            <div class="image-container ${heightClass}">
                <div class="placeholder-img" style="background-color: ${project.color};"></div>
                <div class="overlay">
                    <div class="project-title">${project.title}</div>
                </div>
            </div>
        `;
        
        gridItem.addEventListener('click', () => {
            window.location.href = `detail.html?id=${project.title}&title=${encodeURIComponent(project.title)}`;
        });
        
        grid.appendChild(gridItem);
    });
    
    // Simple masonry function
    function layoutMasonry() {
        const items = document.querySelectorAll('.grid-item');
        const columnCount = getComputedStyle(grid).gridTemplateColumns.split(' ').length;
        
        if (columnCount === 1) return; // No need for masonry on single column
        
        // Reset positions
        items.forEach(item => {
            item.style.position = '';
            item.style.top = '';
            item.style.left = '';
        });
        
        // Calculate column heights
        let columnHeights = new Array(columnCount).fill(0);
        const gridRect = grid.getBoundingClientRect();
        const columnWidth = gridRect.width / columnCount;
        
        items.forEach(item => {
            // Find shortest column
            const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
            
            // Position item
            item.style.position = 'relative';
            item.style.gridColumn = `${shortestColumn + 1} / span 1`;
            
            // Update column height (approximate)
            const itemHeight = item.offsetHeight;
            columnHeights[shortestColumn] += itemHeight + 30; // +30 for gap
        });
    }
    
    // Run layout after images load and on window resize
    setTimeout(layoutMasonry, 100);
    window.addEventListener('resize', () => setTimeout(layoutMasonry, 100));
}