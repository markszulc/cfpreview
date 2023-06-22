import React from 'react'
import SecurBankLogo from '../resources/sb-logo.svg';
import SecurBankSquares from '../resources/sb-squares.svg';

export default function CFBanner({ contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    const assetPath = 'https://s7ap1.scene7.com/is/image/adobeanz/' + imagepath.split("/").pop().split(".")[0] + ':Banner-1300x435?ts=${Math.random()*1000}';
  }

  return (
    <div>
    <div className='banner-440x770-content'>
      <div className='banner-pic'>
        <div className='pic'>
            <img 
              loading="lazy" alt="" type="image/jpeg" 
              src={assetPath} 
              width="1600" height="634">
            </img>
        </div>
        <div className='logo'>
            <img src={SecurBankLogo} alt="Logo" />
        </div>
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