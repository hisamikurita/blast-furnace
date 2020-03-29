window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        centerX = canvas.width / 2,
        centerY = canvas.height / 2,
        particles = [],
        particleNum = 30,
        slice = Math.PI * 2 / particleNum,
        colors = ['#eeb900', '#6DD0A5', '#f799db'];

    function randomIntFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomDecimalFromRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    function randomColor(colors) {
        return colors[Math.floor(Math.random() * colors.length)]
    }

    class Particle {
        constructor(x, y, radius, color) {
            var angle = particleNum * slice;
            this.x = x + Math.cos(angle) * this.radius;
            this.y = y + Math.sin(angle) * this.radius;
            this.color = color;
            this.radius = radius;
        }
        update() {
            this.radius += -1;
            if (this.radius < 0) {
                this.radius = 300;
            }
        }
    }

    //Center Ball
    function centerBall() {
        ctx.beginPath();
        ctx.arc(centerX, centerY, 120, 0, Math.PI * 2);
        grd = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 120);
        grd.addColorStop(0.004, 'rgba(255, 239, 239, 1.000)');
        grd.addColorStop(0.324, 'rgba(244, 168, 168, 1.000)');
        grd.addColorStop(0.692, 'rgba(255, 127, 80, 1.000)');
        grd.addColorStop(1.000, 'rgba(51, 51, 51, 1.000)');
        ctx.fillStyle = grd;
        ctx.fill();
    }
    centerBall();

    for (let i = 0; i < particleNum; i++) {
        particles.push(new Particle(
            centerX,
            centerY,
            300,
            randomColor(colors),
        ));
    }

    render();

    function render() {
        // ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particleNum; i++) {
            var p = particles[i];
            p.update();
            ctx.beginPath();
            ctx.arc(p.x, p.y, 10, 0, Math.PI * 2, false);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
        requestAnimationFrame(render);
    }
}