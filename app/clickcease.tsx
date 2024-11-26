"use client";
import Script from "next/script";


const ClickCease = () => {
    return (
        <>
            <Script id = "clickcease"> {`
                var script = document.createElement('script');
                script.async = true; script.type = 'text/javascript';
                var target = 'https://www.clickcease.com/monitor/stat.js';
                script.src = target;var elem = document.head;elem.appendChild(script);
            `}
            </Script>
            <noscript>
                <a href='https://www.clickcease.com' rel='nofollow'>
                    <img src='https://monitor.clickcease.com' alt='ClickCease' />
                    </a>
            </noscript>

        </>
    );
};

export default ClickCease;