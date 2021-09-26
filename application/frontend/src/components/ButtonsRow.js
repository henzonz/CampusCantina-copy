import React from 'react';

const ButtonsRow = () => {
  return (
    <div style={{ border: '1px solid grey' }}>
      <h4 className="text-center">Buttons Row - Optional</h4>
      <div style={{ display: 'flex' }} className="pl-4">
        <p style={{ paddingRight: '15px' }}>On Campus</p>
        <p style={{ paddingRight: '15px' }}>Pickup</p>
        <p style={{ paddingRight: '15px' }}>Under 20 min</p>
      </div>
    </div>
  );
};

export default ButtonsRow;
