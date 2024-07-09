import React from 'react'


export default function CFBanner({ contentfragment, label}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath = process.env.AEM_DM + _publishUrl.split("/").pop().split(".")[0] + `:Banner-1920x390?ts=${Math.random()*1000}`;
  }

  return (
    <div className="wrapper">
    <div className='email-1920x450-content'>
      <div className='email-pic'>
      <img 
          loading="lazy" alt="" type="image/jpeg" 
          src={assetPath} 
          width="1920" height="450"></img>
      </div>
      <div className='email-text'>
        <h1>{contentfragment.pretitle}</h1>
        <h3>{contentfragment.headline}</h3>
        <p className='button-container'><a href='#' className='button primary'>{contentfragment.callToAction}</a></p>
      </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}