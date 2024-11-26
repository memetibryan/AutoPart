"use client";
import Script from "next/script";

const GoogleAnalytics = ({ GA_TRACKING_ID }: { GA_TRACKING_ID: string }) => {
    return (
        <>
        <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_TRACKING_ID}');
        `}
            </Script>

            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=AW-10988333863`}
                strategy="afterInteractive"
            />
            <Script id="google-ads" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'AW-10988333863');
                `}
            </Script>

            <Script id="google-track" strategy="afterInteractive"> {
                `gtag('config', 'AW-10988333863/pjoWCMTM8eADEKfW0vco', {
                    'phone_conversion_number': '(877) 982-7774'
                });
                `}
            </Script>

        </>
    );
};

export default GoogleAnalytics;