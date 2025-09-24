"use client";

import Script from "next/script";
import { useEffect } from "react";

// Declaración de tipos para Google Analytics
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    trackConsultation: () => void;
    trackPackageView: (packageName: string) => void;
    trackWhatsAppClick: () => void;
  }
}

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ gaId, gtmId }) => {
  // IDs por defecto (el usuario deberá configurar las suyas)
  const GA_MEASUREMENT_ID =
    gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-XXXXXXXXXX";
  const GTM_ID = gtmId || process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";

  useEffect(() => {
    // Track page view cuando el componente se monta
    if (
      typeof window !== "undefined" &&
      window.gtag &&
      typeof document !== "undefined"
    ) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [GA_MEASUREMENT_ID]);

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        id="gtag-base"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {'custom_parameter': 'custom_value'}
            });
            
            // Enhanced ecommerce tracking
            gtag('config', '${GA_MEASUREMENT_ID}', {
              enhanced_ecommerce: true,
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: true,
              allow_ad_personalization_signals: true
            });
            
            // Custom events para el negocio
            function trackConsultation() {
              gtag('event', 'consultation_request', {
                event_category: 'engagement',
                event_label: 'free_consultation',
                value: 497
              });
            }
            
            function trackPackageView(packageName) {
              gtag('event', 'view_item', {
                currency: 'USD',
                value: packageName === 'Growth' ? 1497 : packageName === 'Starter' ? 497 : 0,
                items: [{
                  item_id: packageName.toLowerCase(),
                  item_name: packageName + ' Package',
                  item_category: 'AI_Automation_Package',
                  price: packageName === 'Growth' ? 1497 : packageName === 'Starter' ? 497 : 0,
                  quantity: 1
                }]
              });
            }
            
            function trackWhatsAppClick() {
              gtag('event', 'whatsapp_click', {
                event_category: 'engagement',
                event_label: 'whatsapp_contact',
                transport_type: 'beacon'
              });
            }
            
            // Hacer funciones disponibles globalmente
            window.trackConsultation = trackConsultation;
            window.trackPackageView = trackPackageView;
            window.trackWhatsAppClick = trackWhatsAppClick;
          `,
        }}
      />

      {/* Google Tag Manager */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `,
        }}
      />

      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />

      {/* Hotjar Heatmaps */}
      <Script
        id="hotjar"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:3999999,hjsv:6}; // Reemplazar con ID real de Hotjar
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* Facebook Pixel */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID'); // Reemplazar con Pixel ID real
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  );
};

export default Analytics;
