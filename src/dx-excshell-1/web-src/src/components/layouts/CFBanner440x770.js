import React from 'react'
import SecurBankLogo from '../../resources/sb-logo.svg';
import SecurBankSquares from '../../resources/sb-squares.svg';

export default function CFBanner({ contentfragment, label}) {

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath = contentfragment.heroImage._dmS7Url + ':Banner-440x770?ts=${Math.random()*1000}';
  }

  return (
    <div>
    <div className='banner-440x770-content layout-wrapper'>
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