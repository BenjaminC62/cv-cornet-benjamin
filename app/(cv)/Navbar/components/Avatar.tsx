import React from 'react';
import Image from 'next/image';

const Avatar: React.FC = () => {
  return (
      <Image 
        src="/avatar.webp"
        alt="Benjamin Cornet"
        width={80}
        height={80}
        className="rounded-full w-32 h-32 object-cover border-2 border-slate-800 shadow-sm"
        priority 
      />
  );
};

export default Avatar;