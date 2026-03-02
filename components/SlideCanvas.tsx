
import React from 'react';
import { SlideData } from '../types';
import { IconRenderer } from './IconRenderer';

interface SlideCanvasProps {
  data: SlideData;
  onUpdate: (data: Partial<SlideData>) => void;
}

export const SlideCanvas: React.FC<SlideCanvasProps> = ({ data, onUpdate }) => {
  const safeId = data.id.replace(/[^a-zA-Z0-9]/g, '');
  const slideIdClass = `slide-${safeId}`;

  return (
    <div 
      id={`slide-export-container-${data.id}`}
      className={`poster-root relative w-full h-full overflow-hidden flex flex-col items-center p-8 text-center transition-colors duration-500 ${slideIdClass}`} 
      dir="rtl"
      style={{ backgroundColor: data.backgroundColor }}
    >
      <style>
        {`
          .${slideIdClass} .poster-headline { color: ${data.primaryColor}; }
          .${slideIdClass} .poster-highlight { color: ${data.secondaryColor}; }
          .${slideIdClass} .poster-subheader { color: ${data.primaryColor}; }
          .${slideIdClass} .line-decorator { background-color: ${data.secondaryColor}; }
          .${slideIdClass} .poster-point-icon { color: ${data.primaryColor}; }
          .${slideIdClass} .poster-point-title { color: ${data.textColor}; }
          .${slideIdClass} .poster-logo-text { color: ${data.primaryColor}; }
          .${slideIdClass} .poster-logo-bg { background-color: ${data.primaryColor}1A; }
          .${slideIdClass} .poster-logo-icon { color: ${data.primaryColor}; }
          ${data.customCss ? `.${slideIdClass} ${data.customCss}` : ''}
        `}
      </style>

      {/* Custom Logo (Top Left) */}
      {data.logoUrl && (
        <div className="absolute top-6 left-6 z-20 w-12 h-12 flex items-center justify-center overflow-hidden drop-shadow-sm">
          <img 
            src={data.logoUrl} 
            alt="Logo" 
            crossOrigin="anonymous"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}

      {/* Top Decorative Lines */}
      <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none decorative-bg">
        <svg viewBox="0 0 400 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50C100 0 300 100 400 50V0H0V50Z" fill={data.primaryColor}/>
          <path d="M0 70C100 20 300 120 400 70" stroke={data.primaryColor} strokeWidth="0.5"/>
          <path d="M0 90C100 40 300 140 400 90" stroke={data.primaryColor} strokeWidth="0.5"/>
        </svg>
      </div>

      {/* Header Section */}
      <div className="mt-12 z-10 w-full poster-header-container flex-shrink-0">
        <h1 className="poster-headline text-[30px] font-[700] leading-[1.2] mb-1">
          {data.header}
        </h1>
        <h2 className="poster-highlight text-[34px] font-[900] leading-[1.2] mb-6 drop-shadow-sm">
          {data.highlightedHeader}
        </h2>
        
        <div className="poster-subheader-wrapper flex items-center justify-center gap-2 mb-8">
          <div className="h-[1.5px] w-6 line-decorator"></div>
          <p className="poster-subheader text-[16px] font-[500] px-2 leading-[1.5]">
            {data.subHeader}
          </p>
          <div className="h-[1.5px] w-6 line-decorator"></div>
        </div>
      </div>

      {/* Grid of Points */}
      <div className="poster-points-grid grid grid-cols-2 gap-3 w-full px-2 mb-4 flex-grow content-start">
        {data.points.map((point) => (
          <div key={point.id} className="poster-point bg-slate-50/40 backdrop-blur-sm rounded-2xl p-4 flex flex-col items-center justify-center min-h-[120px] shadow-sm border border-slate-100/50 transition-all">
            <div className="poster-point-icon mb-3">
              <IconRenderer name={point.icon} size={28} />
            </div>
            <p className="poster-point-title text-[15px] font-[700] leading-[1.3] px-1">
              {point.title}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Image & Logos */}
      <div className="poster-footer mt-auto w-full relative flex-shrink-0 pb-2">
        <div className="poster-image-container rounded-2xl overflow-hidden h-40 w-full shadow-lg border-2 border-white ring-1 ring-slate-100">
          <img 
            src={data.footerImage} 
            alt="Context" 
            crossOrigin="anonymous"
            className="poster-footer-image w-full h-full object-cover"
          />
        </div>
        
        <div className="poster-logo-bar mt-4 flex justify-between items-center px-2">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 rounded-full poster-logo-bg flex items-center justify-center">
                <IconRenderer name="Zap" size={14} className="poster-logo-icon" />
             </div>
             <span className="text-[12px] font-[700] poster-logo-text tracking-wide">ريف Reef</span>
          </div>
          <div className="flex gap-3 grayscale opacity-30">
             <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
             <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
             <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};