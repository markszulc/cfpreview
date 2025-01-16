import React from 'react'


export default function CFBanner({ contentfragment, label}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath =  contentfragment.heroImage._dmS7Url + `:Banner-1920x390?ts=${Math.random()*1000}`;
    
    // assetPath = process.env.AEM_DM + _publishUrl.split("/").pop().split(".")[0] + `:Banner-1920x390?ts=${Math.random()*1000}`;
  }

  return (
    <div>
    <div className='banner-1920x390-content layout-wrapper'>
      <div className='banner-pic'>
      <img 
          loading="lazy" alt="" type="image/jpeg" 
          src={assetPath} 
          width="1920" height="390"></img>
      </div>
      <div className='banner-text'>
        <h3>{contentfragment.pretitle}</h3>
        <h1>{contentfragment.headline}</h1>
        <p>{contentfragment.detail.plaintext}</p>
        <p className='button-container'><a href='#' className='button primary'>{contentfragment.callToAction}</a></p>
      </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}