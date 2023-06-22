import React from 'react'
import SecurBankLogo from '../resources/sb-logo.svg';
import SecurBankSquares from '../resources/sb-squares.svg';


export default function CFBanner({ cfpath, contentfragment, label, aemauthorurl}) {

  console.log('Content Fragment Banner Headline: ', contentfragment.headline)

  let assetPath = '';
  const _publishUrl = contentfragment.heroImage._publishUrl;
  if (_publishUrl === '') {
    assetPath = contentfragment.heroImage._authorUrl;
  } else {
    assetPath = 'https://s7ap1.scene7.com/is/image/adobeanz/' + _publishUrl.split("/").pop().split(".")[0] + ':Banner-1300x435?ts=${Math.random()*1000}';
  }

  itemId =  "urn:aemconnection:" + cfpath + "/jcr:content/data/master";
  console.log('Item ID: ', itemId);          

  return (
    <div>
    <div className='banner-1300x435-content' itemScope itemID={itemId} itemfilter="cf">
      <div className='banner-pic'>
        <div className='pic'>
          <img 
            loading="lazy" alt="" type="image/jpeg" 
            src={assetPath} 
            width="1600" height="634">
          </img>
        </div>
        <div className='logo'>
          <img itemProp="heroImage" itemType="image" src={SecurBankLogo} alt="Logo" />
        </div>
      </div>
      <div className='banner-text'>
      <h3>{contentfragment.pretitle}</h3>
        <h1 itemProp="headline" itemType="text">{contentfragment.headline}</h1>
        <p>{contentfragment.detail.plaintext}</p>
        <p className='button-container'><a href='#' className='button primary'>{contentfragment.callToAction}</a></p>
      </div>
    </div>
    <h3 className='cfheading'>{label}</h3>
    </div>
  );

}