import React from 'react';

const ContactBar: React.FC = () => {
    return (
        <address className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 not-italic'>
            <span className="text-slate-400 text-base">
                📍 Lens, Arras, Béthune
            </span>
            
            <span className="text-slate-400 text-base ">
                📱 07 82 57 88 32
            </span>

            <a href="mailto:benjamincornet62130@outlook.fr" className="text-slate-400 hover:text-blue-400 text-base transition-colors border-b border-transparent hover:border-blue-400">
                ✉️ benjamincornet62130@outlook.fr
            </a>

            <a href="https://github.com/BenjaminC62" target="_blank" className="text-slate-400 hover:text-blue-400 text-base transition-colors border-b border-transparent hover:border-blue-400">
                🐙 GitHub
            </a>
        </address>
    )
}

export default ContactBar;