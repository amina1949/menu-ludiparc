import React from 'react';

const BackgroundPattern: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
    </div>
  );
};

export default BackgroundPattern;