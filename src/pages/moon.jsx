import React from 'react';

function SolidBackgroundComponent() {
  const solidBackgroundStyles = {
    backgroundColor: 'blue', // Change this to your desired solid color
    width: '100%', // You can set width and height if needed
    height: '100vh', // vh stands for viewport height, makes it full-screen
  };

  return (
    <div style={solidBackgroundStyles}>
      {/* Your content goes here */}
    </div>
  );
}

export default SolidBackgroundComponent;
