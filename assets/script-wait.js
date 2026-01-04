const progressFill = document.querySelector('.progress-fill');
const progressPercentage = document.getElementById('progress-percentage');

let progress = 45;
let increasing = true;

function animateProgress() {
    if (increasing) {
        progress += 0.5;
        if (progress >= 75) increasing = false;
    } else {
        progress -= 0.5;
        if (progress <= 45) increasing = true;
    }
    
    progressFill.style.width = progress + '%';
    progressPercentage.textContent = Math.round(progress) + '%';
}

setInterval(animateProgress, 100);

document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.construction-container');
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = 'var(--color-primary)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        
        container.appendChild(particle);
        
        animateParticle(particle);
    }
    
    function animateParticle(element) {
        let x = parseFloat(element.style.left);
        let y = parseFloat(element.style.top);
        let xSpeed = (Math.random() - 0.5) * 0.5;
        let ySpeed = (Math.random() - 0.5) * 0.5;
        
        function move() {
            x += xSpeed;
            y += ySpeed;
            
            if (x <= 0 || x >= 100) xSpeed *= -1;
            if (y <= 0 || y >= 100) ySpeed *= -1;
            
            element.style.left = x + '%';
            element.style.top = y + '%';
            
            requestAnimationFrame(move);
        }
        
        move();
    }
});