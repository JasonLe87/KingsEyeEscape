import React, { useEffect } from 'react'

export default function Resova() {

  useEffect(() => {
    const script = document.createElement("script"); script.id = "resova-pi";
    const fjs = document.getElementsByTagName("script")[0];
    script.src = "https://kingseyeescape.resova.us/widget";
    script.async = true;
    fjs.parentNode.insertBefore(script, fjs);
  }, [])

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-159548226-1";
    script.async = true;
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-159548226-1');
  }, [])

  return (
    <div id="resova-wrapper"></div>
  )
}