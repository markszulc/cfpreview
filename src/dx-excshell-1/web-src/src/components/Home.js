import React from 'react'
import { Heading, View } from '@adobe/react-spectrum'
import CFBanner from './CFBanner'
import CFApp from './CFApp'


export default function Home() {

  const cfpath = new URLSearchParams(document.location.search)
  const cf = cfpath.get('cf')
  console.log('Content Fragment Path: ', cf)

  const defaultcontent = {
    "data": {
      "offerByPath": {
        "item": {
          "headline": "Earn Great Rewards",
          "pretitle": "While Spending Money",
          "detail": {
            "plaintext": "Start Today"
          },
          "callToAction": "Find Out More now!",
          "heroImage": {
            "_publishUrl": "https://publish-p55117-e571178.adobeaemcloud.com/content/dam/securbank/en/stock/cards---payment/AdobeStock_414939518.jpeg",
            "_dynamicUrl": "/adobe/dynamicmedia/deliver/dm-aid--778b54be-e653-4409-9b82-e39342f47252/AdobeStock_414939518.jpg"
          }
        }
      }
    }
  }
  
  let options = {};
  const aemauthorurl = 'https://author-p55117-e571178.adobeaemcloud.com';
  const persistedquery = `/graphql/execute.json/securbank/OfferByPath;path=${cf};ts=${Math.random()*1000}`;
  let url = aemauthorurl + persistedquery
  console.log(url);
  options = {credentials: "include"};
  
  const content = defaultcontent.data;
  // try {
  //   const cfReq = fetch(url+"?ts="+Math.random()*1000, options)
  //   .then((response) => response.json())
  //   .then((data) => {
  //       console.log(data);
  //       if(data.data) {
  //           console.log(data.data);
  //       } else {
  //           console.log("no data");
  //       }
  //   });
  // } catch (error) {
  //   console.log(error);
  // }


  return (
    <View>
    <Heading level={1}>Welcome to Content Preview!</Heading>
    <Heading level={4}>Content Fragment path: {cf}</Heading>
    
    <CFBanner contentfragment={content} label="Banner Ad 1920 x 390" aemauthorurl={aemauthorurl}></CFBanner>
    <CFApp contentfragment={content} label="Mobile App - Home Banner" aemauthorurl={aemauthorurl}></CFApp>
  </View>

  );

}
