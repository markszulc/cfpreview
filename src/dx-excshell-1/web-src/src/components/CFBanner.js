import React from 'react'


export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Path: ', contentfragment.offerByPath.item.headline)

  const imagepath = aemauthorurl + contentfragment.offerByPath.item.heroImage._dynamicUrl;

  return (
    <div>
    <h1>{label}</h1>
    <div className='banner-content'>
      <div className='banner-pic'>
      <img 
          loading="lazy" alt="" type="image/jpeg" 
          src={imagepath} 
          width="1600" height="634"></img>
      </div>
      <div className='banner-text'>
        <h3>{contentfragment.offerByPath.item.headline}</h3>
        <h1>{contentfragment.offerByPath.item.pretitle}</h1>
        <p>{contentfragment.offerByPath.item.detail.plaintext}</p>
        <p className='button-container'><a href='#' className='button primary'>{contentfragment.offerByPath.item.callToAction}</a></p>
      </div>
    </div>
    </div>
  );

}