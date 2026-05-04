// Project data - REPLACE THESE with your actual projects
const projects = [
    { title: "The Curious Cabinet", color: "#FFB6C1" },
    { title: "Whispers in the Attic", color: "#C0E0FF" },
    { title: "The Clockwork Garden", color: "#D4F1D4" },
    { title: "Strange Brew", color: "#FFD4A8" },
    { title: "The Lost Library", color: "#E0C0FF" },
    { title: "Moonlit Menagerie", color: "#A8D8FF" },
    { title: "Peculiar Pets", color: "#FFC8A2" },
    { title: "The Imaginary Map", color: "#C2E0C2" },
    { title: "Forgotten Fairy Tales", color: "#FFB3BA" }
];

// Generate grid
const grid = document.getElementById('projectGrid');
if (grid) {
    projects.forEach(project => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `
            <div class="image-container">
                <div class="placeholder-img" style="background-color: ${project.color};"></div>
                <div class="overlay">
                    <div class="project-title">${project.title}</div>
                </div>
            </div>
            <p>${project.title}</p>
        `;
        
        // Click to go to detail page
        gridItem.addEventListener('click', () => {
            window.location.href = `detail.html?id=${project.title}&title=${encodeURIComponent(project.title)}`;
        });
        
        grid.appendChild(gridItem);
    });
}