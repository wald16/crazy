'use client';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: '#0e0e1a',
                },
                particles: {
                    number: {
                        value: 50, // insane amount but still safe
                        density: {
                            enable: true,
                            area: 700,
                        },
                    },
                    color: {
                        value: ['#ffffff', '#ff00ff', '#00ffff', '#39ff14'],
                    },
                    shape: {
                        type: 'circle',
                    },
                    opacity: {
                        value: 0.7,
                        random: true,
                        animation: {
                            enable: true,
                            speed: 0.5,
                            minimumValue: 0.3,
                            sync: false,
                        },
                    },
                    size: {
                        value: { min: 1, max: 8 },
                        animation: {
                            enable: true,
                            speed: 4,
                            minimumValue: 0.5,
                            sync: false,
                        },
                    },
                    links: {
                        enable: true,
                        color: '#ffffff',
                        distance: 150,
                        opacity: 0.4,
                        width: 2,
                    },
                    move: {
                        enable: true,
                        speed: 2.5,
                        direction: 'none',
                        outModes: {
                            default: 'bounce',
                        },
                        trail: {
                            enable: true,
                            length: 10,
                            fillColor: '#0e0e1a',
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onClick: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                    modes: {
                        grab: {
                            distance: 180,
                            links: {
                                opacity: 0.8,
                            },
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
