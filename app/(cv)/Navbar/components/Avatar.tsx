import React from 'react';
import Image from 'next/image';

const Avatar: React.FC = () => {
  return (
      <Image 
        src="/avatar.webp"
        alt="Benjamin Cornet"
        width={80}
        height={80}
        sizes="80px"
        className="rounded-full w-[158px] h-[158px] object-cover border-2 border-slate-800 shadow-sm"
        priority 
      />
  );
};

export default Avatar;