import React from 'react'

const ContactBar: React.FC = () => {

    const contactData = [
        { icon: "📍", text: "Lens, Arras, Bruay, Béthune", url: null },
        { icon: "📱", text: "07 82 57 88 32", url: null },
        { icon: "✉️", text: "benjamincornet@outlook.fr", url: "mailto:benjamincornet@outlook.fr" },
        { icon: "🦑", text: "GitHub", url: "https://github.com/benjamincornet" },
    ];


    return (
        <div className='flex flex-wrap items-center gap-6 mt-6 mx-auto'>
            {contactData.map((info) => (
                <div key={info.text} className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <span className="text-xl">{info.icon}</span>
                {info.url ? (
                    <a 
                        href={info.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm font-medium font-sans hover:text-[#0e84f5] transition-colors cursor-pointer border-b border-white/30 hover:border-[#0e84f5] pb-0.5"
                    >
                        {info.text}
                    </a>
                ) : (
                <span className="text-sm font-medium font-sans">
                    {info.text}
                </span>
                )}
                
                </div>
            ))}
        </div>
    )
}

export default ContactBar;