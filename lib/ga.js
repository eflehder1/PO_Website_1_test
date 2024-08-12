import React from 'react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

// [invalid URL removed]
export const pageview = (url) => {
window.gtag('config', GA_TRACKING_ID, {
page_path: url,
});
};

export const initializeTracker = () => {
const script = document.createElement('script');

script.async = true;
script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_TRACKING_ID;
script.onload = () => {
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', GA_TRACKING_ID, { page_path: window.location.pathname });
};   

document.head.appendChild(script);
};   

export default function usePageViews() {
const router = useRouter();
useEffect(() => {
const handleRouteChange = (url) => pageview(url);
router.events.on('routeChangeComplete', handleRouteChange);
return () => {
router.events.off('routeChangeComplete', handleRouteChange);
};
}, [router.events]);
}