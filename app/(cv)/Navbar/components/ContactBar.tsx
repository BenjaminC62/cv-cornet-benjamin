import React from 'react';

const ContactBar: React.FC = () => {
    const contactData = [
        { icon: "📍", text: "Lens, Arras, Bruay, Béthune", url: null },
        { icon: "📱", text: "07 82 57 88 32", url: null },
        { icon: "✉️", text: "benjamincornet@outlook.fr", url: "mailto:benjamincornet@outlook.fr" },
        { icon: "🦑", text: "GitHub", url: "https://github.com/benjamincornet" },
    ];

    return (
        <div className='flex flex-wrap items-center gap-6 mt-6 mx-auto justify-center sm:mx-0'>
            {contactData.map((info) => (
                <div key={info.text} className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors">
                    <span className="text-xl">{info.icon}</span>
                    {info.url ? (
                        <a 
                            href={info.url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-lg font-medium border-b border-transparent hover:border-blue-400 pb-0.5 transition-all"
                        >
                            {info.text}
                        </a>
                    ) : (
                        <span className="text-lg font-medium cursor-default">
                            {info.text}
                        </span>
                    )}
                </div>
            ))}
        </div>
    )
}

export default ContactBar;