import React from 'react'


export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  const imagepath = contentfragment.heroImage._publishUrl;
  const assetPath = 'https://s7ap1.scene7.com/is/image/adobeanz/' + imagepath.split("/").pop().split(".")[0] + ':Banner-1920x390?ts=${Math.random()*1000}';
  console.log('Asset Path: ', assetPath);

  return (
    <div>
    <div className='banner-1920x390-content'>
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