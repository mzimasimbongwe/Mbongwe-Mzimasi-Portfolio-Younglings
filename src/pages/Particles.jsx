// ParticlesBackground.js

import Particles from 'react-particles-js';

const ParticlesBackground = () => {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 50, // Adjust the number of particles
            density: {
              enable: true,
              value_area: 800, // Adjust the area in which particles will be distributed
            },
          },
          color: {
            value: '#2196F3', // Adjust the particle color
          },
          shape: {
            type: 'circle', // Adjust the shape if needed
            stroke: {
              width: 0,
              color: '#000000',
            },
          },
          size: {
            value: 3, // Adjust the particle size
          },
          opacity: {
            value: 0.5, // Adjust the particle opacity
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          line_linked: {
            enable: false, // Disable particle connections
          },
          move: {
            enable: true,
            speed: 1, // Adjust particle movement speed
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse', // Adjust interaction mode on hover
            },
          },
          modes: {
            repulse: {
              distance: 100, // Adjust repulsion distance
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
