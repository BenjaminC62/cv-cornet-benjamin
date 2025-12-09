import React from 'react'
import Avatar from './components/Avatar';
import { poppins } from '@/components/ui/font';
import ContactBar from './components/ContactBar';

const Navbar: React.FC = () => {
    return (
        <nav className='flex flex-col'>
            <div className='flex items-center gap-4'>
                <Avatar />
                <div className='flex flex-col text-white'>
                    <span className={`${poppins.className} antialiased text-[52px] uppercase font-bold leading-none`}>Cornet Benjamin</span>
                    <span className={`${poppins.className} antialiased text-[16px] mt-1`}>Etudiant à l'iut de lens</span>
                </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-4 shadow-sm">
                <span className="text-2xl">🎯</span>
                
                <span className="text-white font-medium text-lg">
                    Recherche stage développement web à partir du 16 mars
                </span>
            </div>
            <ContactBar />
        </nav>
    )
}

export default Navbar;