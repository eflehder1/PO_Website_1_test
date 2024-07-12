import { useEffect, useRef, useState } from 'react';

const drawStar = (ctx, cx, cy, spikes, outerRadius, innerRadius) => {
    let rot = Math.PI / 2 * 3;
    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);

    for (let i = 0; i < spikes; i++) {
        ctx.lineTo(cx + Math.cos(rot) * outerRadius, cy + Math.sin(rot) * outerRadius);
        rot += Math.PI / spikes;
        ctx.lineTo(cx + Math.cos(rot) * innerRadius, cy + Math.sin(rot) * innerRadius);
        rot += Math.PI / spikes;
    }

    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fillStyle = 'rgba(255, 255, 204, 0.4)';
    ctx.fill();
};

const StarField = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const handleResize = () => {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });
        };

        // Set initial dimensions and add resize listener
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (dimensions.width > 0 && dimensions.height > 0) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const stars = Array.from({ length: 200 }, () => ({
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                radius: Math.random() * 6 + 3,
                intensity: 0.5,
            }));

            const drawStars = () => {
                ctx.clearRect(0, 0, dimensions.width, dimensions.height);
                stars.forEach(star => {
                    drawStar(ctx, star.x, star.y, 5, star.radius, star.radius / 2);
                });
            };

            drawStars(); // Initial drawing of stars

            const handleMouseMove = (event) => {
                stars.forEach(star => {
                    const dx = star.x - event.clientX;
                    const dy = star.y - event.clientY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        star.x -= dx * 0.01;
                        star.y -= dy * 0.01;
                    }
                });

                drawStars();
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, [dimensions]);

    return (
        <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 10 }} />
    );
};

export default StarField;
