import React from 'react';
import Avatar from './components/Avatar';
import ContactBar from './components/ContactBar';

const Navbar: React.FC = () => {
    return (
        <nav className='flex flex-col'>
            <div className='flex items-center gap-6'>
                <Avatar />
                <div className='flex flex-col'>
                    <span className="text-slate-100 text-[42px] sm:text-[52px] uppercase font-bold leading-none tracking-tight">
                        Cornet Benjamin
                    </span>
                    <span className="text-blue-400 text-[16px] mt-1 font-medium tracking-wide">
                        Étudiant à l'IUT de Lens
                    </span>
                </div>
            </div>

            <div className="mt-8 bg-slate-900/50 p-4 rounded-xl border border-slate-800 flex items-center gap-4 shadow-sm">
                <span className="text-2xl">🎯</span>
                <span className="text-slate-200 font-medium text-lg">
                    Recherche stage développement web à partir du 16 mars
                </span>
            </div>
            
            <ContactBar />
        </nav>
    )
}

export default Navbar;