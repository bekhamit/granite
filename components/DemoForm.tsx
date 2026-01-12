import React, { useEffect, useRef, useState } from 'react';
import { Loader2 } from 'lucide-react';

declare global {
  interface Window {
    Calendly: any;
  }
}

export const DemoForm: React.FC = () => {
  const calendlyContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const scriptSrc = "https://assets.calendly.com/assets/external/widget.js";
    let isMounted = true;

    const initWidget = () => {
      if (!isMounted || !calendlyContainerRef.current) return;
      
      try {
        if (window.Calendly) {
          calendlyContainerRef.current.innerHTML = ''; // Clean up previous instances
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/sardorr02/15min',
            parentElement: calendlyContainerRef.current,
            utm: {}
          });
          setIsLoading(false);
        }
      } catch (e) {
        console.error("Calendly initialization failed:", e);
      }
    };

    if (window.Calendly) {
      initWidget();
    } else {
      // Check if script already exists to avoid duplicates
      let script = document.querySelector(`script[src="${scriptSrc}"]`) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.src = scriptSrc;
        script.async = true;
        document.body.appendChild(script);
      }

      // Always listen for load, even if script exists (it might be loading)
      const onScriptLoad = () => {
        initWidget();
      };
      
      script.addEventListener('load', onScriptLoad);
      
      // Fallback: If script is already loaded but event missed (rare but possible with caching/timing)
      // or if window.Calendly becomes available via other means.
      const intervalId = setInterval(() => {
         if (window.Calendly) {
           clearInterval(intervalId);
           script.removeEventListener('load', onScriptLoad);
           initWidget();
         }
      }, 500);

      return () => {
        isMounted = false;
        script.removeEventListener('load', onScriptLoad);
        clearInterval(intervalId);
      };
    }
  }, []);

  return (
    <div className="w-full bg-white shadow-2xl rounded-sm overflow-hidden border border-gray-100 relative min-h-[700px]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-10">
          <Loader2 className="w-8 h-8 text-navy-900 animate-spin" />
        </div>
      )}
      <div 
        ref={calendlyContainerRef} 
        className="calendly-inline-widget w-full bg-white" 
        style={{ height: '700px', minWidth: '320px' }} 
        data-url="https://calendly.com/sardorr02/15min"
      />
    </div>
  );
};