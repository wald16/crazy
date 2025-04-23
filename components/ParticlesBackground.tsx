'use client';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
    return (
        <Particles
            id="tsparticles"
            options={{
                fullScreen: { enable: true, zIndex: -1 },
                background: { color: '#0e0e1a' },
                particles: {
                    color: { value: ['#ff00ff', '#00ffff', '#ffffff'] },
                    links: {
                        enable: true,
                        color: '#ffffff',
                        distance: 150,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                        outModes: { default: 'bounce' },
                    },
                    number: {
                        value: 100,
                        density: { enable: true, area: 800 },
                    },
                    shape: { type: 'circle' },
                    size: {
                        value: { min: 1, max: 4 },
                        animation: { enable: true, speed: 3 },
                    },
                    opacity: {
                        value: 0.6,
                        animation: { enable: true, speed: 0.5 },
                    },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: 'grab' },
                        onClick: { enable: true, mode: 'repulse' },
                    },
                    modes: {
                        grab: { distance: 140, links: { opacity: 0.5 } },
                        repulse: { distance: 200, duration: 0.4 },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
