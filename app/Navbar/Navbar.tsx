import React from 'react'
import Avatar from './components/Avatar';

const Navbar: React.FC = () => {
    return (
        <nav className=''>
            <div className='flex items-center gap-4'>
                <Avatar />
                <div className='flex flex-col text-white'>
                    <span>Cornet Benjamin</span>
                    <span>Etudiant à l'iut de lens</span>
                </div>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 flex items-center gap-4 shadow-sm">
                <span className="text-2xl">🎯</span>
                
                <span className="text-white font-medium text-lg">
                    Recherche stage développement web à partir du 16 mars
                </span>
            </div>
        </nav>
    )
}

export default Navbar;