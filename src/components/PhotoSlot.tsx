import React from 'react';
import { User } from 'lucide-react';
import { Language } from '../types';

interface PhotoSlotProps {
  src: string | null;
  alt: string;
  variant: 'circle' | 'portrait';
  lang: Language;
}

export const PhotoSlot: React.FC<PhotoSlotProps> = ({ src, alt, variant, lang }) => {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`block w-full h-full object-cover object-center ${
          variant === 'portrait' ? 'group-hover:scale-103 transition-transform duration-500' : ''
        }`}
      />
    );
  }

  const label = lang === 'en' ? 'Photo coming soon' : '사진 추후 추가 예정';

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-2 bg-neutral-100 text-neutral-400"
      aria-label={label}
    >
      <User className={variant === 'circle' ? 'w-12 h-12 md:w-14 md:h-14' : 'w-10 h-10'} strokeWidth={1.25} />
      {variant === 'portrait' && (
        <span className="text-[11px] md:text-xs font-medium tracking-wide uppercase">
          {label}
        </span>
      )}
    </div>
  );
};
