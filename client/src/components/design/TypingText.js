import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypingText = () => {
  return (
    <div className='text-lg font-animate flex items-center justify-center font-normal leading-[1.24] font-subheading text-[rgb(14,28,54)] text-center'
      style={{ fontSize: '2em' }}>
      <div className='font-subheading font-bold text-red'>
        We are...
      </div>
      <TypeAnimation
        sequence={[
          'innovators',
          1000,
          'creators',
          1000,
          'problem solvers',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypingText;
