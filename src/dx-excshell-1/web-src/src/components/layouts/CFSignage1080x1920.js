import React from 'react'


export default function CFBanner({ contentfragment, label}) {

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath = process.env.AEM_DM + _publishUrl.split("/").pop().split(".")[0] + ':Signage-1080x1920?ts=${Math.random()*1000}';
  }

  return (
    <div>
    <div className='signage-1080x1920-content'>
      <div className='signage-pic'>
      <img 
          loading="lazy" alt="" type="image/jpeg" 
          src={assetPath} 
          width="1600" height="634"></img>
      </div>
      <div className='signage-text'>
        <h3>{contentfragment.pretitle}</h3>
        <h1>{contentfragment.headline}</h1>
        <p>{contentfragment.detail.plaintext}</p>
           </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}