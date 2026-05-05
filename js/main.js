// Project data - EACH PROJECT CAN HAVE A DIFFERENT HEIGHT
// Height options: 'small' (portrait), 'medium' (square), 'large' (landscape)
const projects = [
    { title: "The Curious Cabinet", color: "#FFB6C1", height: "medium" },
    { title: "Whispers in the Attic", color: "#C0E0FF", height: "large" },
    { title: "The Clockwork Garden", color: "#D4F1D4", height: "small" },
    { title: "Strange Brew", color: "#FFD4A8", height: "medium" },
    { title: "The Lost Library", color: "#E0C0FF", height: "large" },
    { title: "Moonlit Menagerie", color: "#A8D8FF", height: "small" },
    { title: "Peculiar Pets", color: "#FFC8A2", height: "medium" },
    { title: "The Imaginary Map", color: "#C2E0C2", height: "large" },
    { title: "Forgotten Fairy Tales", color: "#FFB3BA", height: "small" }
];

// Generate grid
const grid = document.getElementById('projectGrid');
if (grid) {
    projects.forEach(project => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        
        // Assign height class based on project setting
        let heightClass = '';
        if (project.height === 'small') heightClass = 'height-small';
        else if (project.height === 'large') heightClass = 'height-large';
        else heightClass = 'height-medium'; // default
        
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
