// components/StarField.js
import React, { useEffect, useRef, useState } from 'react';

const StarField = () => {
    const canvasRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        // Only run this client-side
        if (typeof window !== 'undefined') {
            setDimensions({ width: window.innerWidth, height: window.innerHeight });

            const handleResize = () => {
                setDimensions({ width: window.innerWidth, height: window.innerHeight });
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        if (dimensions.width && dimensions.height) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const stars = Array.from({ length: 200 }, () => ({  // More stars
                x: Math.random() * dimensions.width,
                y: Math.random() * dimensions.height,
                radius: Math.random() * 4 + 2,  // Larger stars
                intensity: 0.5,
                originalRadius: Math.random() * 4 + 2,
            }));

            function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
                let rot = Math.PI / 2 * 3;
                let x = cx;
                let y = cy;
                let step = Math.PI / spikes;

                ctx.beginPath();
                ctx.moveTo(cx, cy - outerRadius)
                for (let i = 0; i < spikes; i++) {
                    x = cx + Math.cos(rot) * outerRadius;
                    y = cy + Math.sin(rot) * outerRadius;
                    ctx.lineTo(x, y)
                    rot += step

                    x = cx + Math.cos(rot) * innerRadius;
                    y = cy + Math.sin(rot) * innerRadius;
                    ctx.lineTo(x, y)
                    rot += step
                }
                ctx.lineTo(cx, cy - outerRadius)
                ctx.closePath();
                ctx.fill();
            }

            function drawStars() {
                ctx.clearRect(0, 0, dimensions.width, dimensions.height);
                stars.forEach(star => {
                    ctx.fillStyle = `rgba(255, 255, 204, ${star.intensity})`;
                    drawStar(star.x, star.y, 5, star.radius, star.radius / 2);  // Drawing star shapes
                });
            }

            function updateStars(x, y) {
                stars.forEach(star => {
                    const dx = star.x - x;
                    const dy = star.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Make stars move closer and get slightly bigger when the mouse is near
                    if (distance < 150) {
                        star.x -= dx * 0.02;
                        star.y -= dy * 0.02;
                        star.radius = Math.min(star.originalRadius * (1 + 1 / (distance + 1)), star.originalRadius * 2);
                    } else {
                        star.radius = star.originalRadius;
                    }
                });
            }

            function handleMouseMove(event) {
                updateStars(event.clientX, event.clientY);
                drawStars();
            }

            window.addEventListener('mousemove', handleMouseMove);
            drawStars();

            return () => window.removeEventListener('mousemove', handleMouseMove);
        }
    }, [dimensions]);

    return (
        <canvas ref={canvasRef} width={dimensions.width} height={dimensions.height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }} />
    );
};

export default StarField;
