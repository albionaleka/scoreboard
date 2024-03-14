let team1 = 0;
let team2 = 0;

document.querySelector('#add1').onclick = function () {
    team1 = team1 + 1;
    document.querySelector('#score1').innerHTML = team1;
    if (team2 < 5){
        if (team1 == 5){
            document.querySelector('#result').innerHTML = "Team 1 Wins!";
            animate();
        }
    }
} 

document.querySelector('#add2').onclick = function () {
    team2 = team2 + 1;
    document.querySelector('#score2').innerHTML = team2;
    if (team1 < 5){
        if (team2 == 5){
            document.querySelector('#result').innerHTML = "Team 2 Wins!";
            animate();
        }
    }
} 

const canvas = document.getElementById('confettiCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Confetti colors
const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff'];

// Generate confetti particles
const particles = [];
for (let i = 0; i < 100; i++) {
    particles.push({
        x: Math.random() * canvas.width, 
        y: Math.random() * canvas.height, 
        color: colors[Math.floor(Math.random() * colors.length)], 
        radius: Math.random() * 5 + 5, 
        speed: Math.random() * 2 + 1, 
        angle: Math.random() * Math.PI * 2
    });
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed + 0.5; 
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        if (particle.x < 0 || particle.x > canvas.width || particle.y > canvas.height) {
            particle.x = Math.random() * canvas.width;
            particle.y = -10;
        }
    });

    requestAnimationFrame(animate);
}
