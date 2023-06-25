import React from 'react'


export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath = 'https://s7ap1.scene7.com/is/image/adobeanz/' + _publishUrl.split("/").pop().split(".")[0] + ':Banner-1920x390?ts=${Math.random()*1000}';
  }

  return (
    <div>
    <div className='app-150x150-content'>
      <div className='banner-text'>
        <h1>{contentfragment.headline}</h1>
      </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}