import React from 'react';

// Lightbox uses Context so any child can easily trigger it
interface LightboxContextType {
  openLightbox: (src: string) => void;
}

export const LightboxContext = React.createContext<LightboxContextType>({ openLightbox: () => {} });

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [imgSrc, setImgSrc] = React.useState('');

  const openLightbox = (src: string) => {
    setImgSrc(src);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setTimeout(() => setImgSrc(''), 300); // clear after animation
  };

  return (
    <LightboxContext.Provider value={{ openLightbox }}>
      {children}
      <div 
        className={`lightbox-overlay ${isOpen ? 'active' : ''}`} 
        onClick={closeLightbox}
      >
        {imgSrc && <img src={imgSrc} alt="Lightbox Preview" className="lightbox-img" onClick={(e) => e.stopPropagation()} />}
      </div>
    </LightboxContext.Provider>
  );
}
