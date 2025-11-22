const canvas = document.getElementById("particulas-canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initParticles(); // recalcular partículas en resize
});

// Clase para partículas
class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        // Distribución ligeramente fuera de pantalla
        this.x = Math.random() * (width + 100) - 50;
        this.y = Math.random() * (height + 100) - 50;
        this.size = Math.random() * 2 + 0.8; // tamaño relativo
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.8 + 0.3;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < -50 || this.x > width + 50 || this.y < -50 || this.y > height + 50) {
            this.reset();
        }
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = `rgba(163, 20, 33, ${this.opacity})`;
        ctx.shadowColor = "rgba(163, 20, 33, 1)";
        ctx.shadowBlur = 10; // brillo visible
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Inicializar partículas
let particles = [];

function initParticles() {
    const areaFactor = Math.sqrt(width * height / (1366*768)); // escalado por pantalla
    const particleCount = Math.floor(180 * areaFactor); // mínimo 60
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

initParticles();

// Animación
function animate() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animate);
}

animate();
