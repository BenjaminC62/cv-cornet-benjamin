import React from 'react';
import Avatar from './components/Avatar';
import ContactBar from './components/ContactBar';

const Navbar: React.FC = () => {
    return (
        <section className='flex flex-col gap-8'>
            <div className='flex flex-col sm:flex-row items-center sm:items-start gap-8'>
                <Avatar />

                <div className='text-center sm:text-left space-y-2'>
                    <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight uppercase bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-white">
                        Cornet Benjamin
                    </h1>
                    <h2 className="text-zinc-400 text-2xl font-medium">
                        Étudiant en Informatique - IUT de Lens
                    </h2>
                    <p className="text-zinc-500 text-base pt-1 max-w-lg mx-auto sm:mx-0 leading-relaxed">
                        Recherche stage développement web <span className="text-blue-400 font-bold">(dès le 16 mars)</span>
                    </p>
                </div>
            </div>
            
            <ContactBar />
        </section>
    )
}
export default Navbar;