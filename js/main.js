// Project data - each project can have different height
// Height options: 'small' (tall/portrait), 'medium' (square), 'large' (wide/landscape)
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
    
    // Create all grid items
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
        
        // Click to go to detail page
        gridItem.addEventListener('click', () => {
            window.location.href = `detail.html?id=${project.title}&title=${encodeURIComponent(project.title)}`;
        });
        
        grid.appendChild(gridItem);
    });
}