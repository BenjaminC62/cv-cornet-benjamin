import React from 'react'
import Avatar from './components/Avatar';

const Navbar: React.FC = () => {
    return (
        <nav className='flex'>
            <Avatar />
            <span>Cornet Benjamin</span>
            <span>Etudiant à l'iut de lens</span>
        </nav>
    )
}

export default Navbar;