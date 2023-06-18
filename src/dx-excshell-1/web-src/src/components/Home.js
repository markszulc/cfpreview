import React, { useEffect, useState } from 'react'
import { Heading, View } from '@adobe/react-spectrum'
import CFBanner1920x390 from './CFBanner1920x390'
import CFBanner1300x435 from './CFBanner1300x435'
import CFBanner440x770 from './CFBanner440x770'
import CFDigitalSignage1080x1920 from './CFSignage1080x1920'

export default function Home() {

  const aemauthorurl = 'https://author-p55117-e571178.adobeaemcloud.com';
    
  const defaultcontent = {
    "headline": "Headline",
    "pretitle": "Pretitle",
    "detail": {
      "plaintext": "Detail"
    },
    "callToAction": "Call to Action",
    "heroImage": {
      "_publishUrl": "https://publish-p55117-e571178.adobeaemcloud.com/content/dam/securbank/en/stock/cards---payment/AdobeStock_414939518.jpeg",
      "_dynamicUrl": "/adobe/dynamicmedia/deliver/dm-aid--778b54be-e653-4409-9b82-e39342f47252/AdobeStock_414939518.jpg"
    }
  }

  const [state,setState] = useState({contentfragment: defaultcontent})

  const getContentFragment = () => {
    let options = {};
    const persistedquery = `/graphql/execute.json/securbank/OfferByPath;path=${cf};ts=${Math.random()*1000}`;
    let url = aemauthorurl + persistedquery
    console.log(url);
    options = {credentials: "include"};   
    
    try {
      const cfReq = fetch(url+"?ts="+Math.random()*1000, options)
      .then((response) => response.json())
      .then((contentfragment) => {
          if(contentfragment.data) {
              console.log(contentfragment.data.offerByPath.item);
              let content = contentfragment.data.offerByPath.item;
              setState({contentfragment: content});
              return content;
          } else {
              console.log("no data");
          }
      });
    } catch (error) {
      console.log(error);
    }

  }

  const cfpath = new URLSearchParams(document.location.search)
  const cf = cfpath.get('cf')
  if (cf)
    console.log('Content Fragment Path: ', cf)
  else
    cf = 'Not found - Displaying Placeholder Content'

  useEffect(() => {
    getContentFragment();
  }, [])

  return (
    <View>
      <Heading level={1}>Content Previewer</Heading>
      <Heading level={4}>Content Fragment path: {cf}</Heading> 
      <CFBanner1920x390 contentfragment={state.contentfragment} label="Banner Ad 1920 x 390" aemauthorurl={aemauthorurl}></CFBanner1920x390>
      <CFBanner1300x435 contentfragment={state.contentfragment} label="Banner Ad 1300 x 435" aemauthorurl={aemauthorurl}></CFBanner1300x435>
      <CFBanner440x770 contentfragment={state.contentfragment} label="Banner Ad 440 x 770" aemauthorurl={aemauthorurl}></CFBanner440x770>
      <CFDigitalSignage1080x1920 contentfragment={state.contentfragment} label="Digital Signage 1080 x 1920" aemauthorurl={aemauthorurl}></CFDigitalSignage1080x1920>
    </View>
  );

}


 