import React from 'react';
import Avatar from './components/Avatar';
import ContactBar from './components/ContactBar';

const Navbar: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 mb-8'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                <Avatar />
                
                <div className='flex flex-col items-center sm:items-start text-center sm:text-left space-y-2'>
                    <h1 className="text-slate-50 text-4xl sm:text-5xl font-bold tracking-tight uppercase">
                        Cornet Benjamin
                    </h1>
                    <h2 className="text-blue-400 text-lg font-medium tracking-wide">
                        Étudiant en Informatique - IUT de Lens
                    </h2>
                </div>
            </div>

            <div className="w-full py-3 px-4 bg-slate-900/80 border-y border-slate-800 text-center">
                <p className="text-blue-200 text-sm sm:text-base font-medium flex items-center justify-center gap-2">
                    <span className="animate-pulse">🎯</span> 
                    Recherche stage développement web (dès le 16 mars)
                </p>
            </div>
            
            <ContactBar />
        </div>
    )
}

export default Navbar;