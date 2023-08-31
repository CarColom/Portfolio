import React, { useState, useEffect } from 'react';


const CursorEffect = () => {
  const [trails, setTrails] = useState([]);

  useEffect(() => {
    const cursorContainer = document.querySelector('.cursor-container');

    const updateTrails = (e) => {
      const newTrail = { x: e.clientX, y: e.clientY, id: Date.now() };
      setTrails((prevTrails) => {
        const maxTrailLength = 15;
        const newTrails = [...prevTrails, newTrail].slice(-maxTrailLength);
        return newTrails;
      });

      clearTimeout(cursorContainer.hideTimeout);
      cursorContainer.style.opacity = 1;

      cursorContainer.hideTimeout = setTimeout(() => {
        cursorContainer.style.opacity = 0;
      }, 500); 
    };

    document.addEventListener('mousemove', updateTrails);

    return () => {
      document.removeEventListener('mousemove', updateTrails);
    };
  }, []);

  return (
    <div className="cursor-container" style={{ opacity: 0 }}>
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{ left: trail.x, top: trail.y }}
        ></div>
      ))}
    </div>
  );
};

export default CursorEffect;


