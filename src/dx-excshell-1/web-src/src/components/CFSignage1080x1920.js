import React from 'react'


export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Digital Signage: ', contentfragment.headline)

  const imagepath = contentfragment.heroImage._publishUrl;
  const assetPath = 'https://s7ap1.scene7.com/is/image/adobeanz/' + imagepath.split("/").pop().split(".")[0] + ':Signage1080x1920?ts=${Math.random()*1000}';
  console.log('Asset Path: ', assetPath);


  return (
    <div>
    <h1>{label}</h1>
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
    </div>
  );

}