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
    gtag('js', new Date());
    gtag('config', 'UA-159548226-1', {
      'page_title' : 'resova',
      'page_path': '/resova'
    });
  }, [])

  return (
    <div id="resova-wrapper"></div>
  )
}