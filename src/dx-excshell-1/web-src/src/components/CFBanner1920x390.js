import React from 'react'


export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  const imagepath = aemauthorurl + contentfragment.heroImage._dynamicUrl;

  return (
    <div>
    <h1>{label}</h1>
    <div className='banner-1920x390-content'>
      <div className='banner-pic'>
      <img 
          loading="lazy" alt="" type="image/jpeg" 
          src={imagepath} 
          width="1600" height="634"></img>
      </div>
      <div className='banner-text'>
        <h3>{contentfragment.headline}</h3>
        <h1>{contentfragment.pretitle}</h1>
        <p>{contentfragment.detail.plaintext}</p>
        <p className='button-container'><a href='#' className='button primary'>{contentfragment.callToAction}</a></p>
      </div>
    </div>
    </div>
  );

}