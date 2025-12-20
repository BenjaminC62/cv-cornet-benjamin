import React from 'react';
import Avatar from './components/Avatar';
import ContactBar from './components/ContactBar';

const Navbar: React.FC = () => {
    return (
        <section className='flex flex-col gap-6'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-6'>
                <Avatar />
                
                <div className='text-center sm:text-left space-y-1'>
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight uppercase from-blue-400 to-white bg-clip-text text-transparent bg-linear-to-r">
                        Cornet Benjamin
                    </h1>
                    <h2 className="text-blue-400 text-3xl font-medium">
                        Étudiant en Informatique - IUT de Lens
                    </h2>
                    <p className="text-slate-400 text-lg pt-2 max-w-md">
                        Recherche stage développement web (dès le 16 mars)
                    </p>
                </div>
            </div>
            
            <ContactBar />
        </section>
    )
}

export default Navbar;