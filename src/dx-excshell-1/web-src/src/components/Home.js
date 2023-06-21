import React, { useEffect, useState } from 'react'
import { Heading, View, TagGroup, Item } from '@adobe/react-spectrum'
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
    },
    "_tags": [
      "audiences:subscribers"
    ],
    "_variations": [
      "long_term_customers",
      "students",
      "high_value"
    ],
    "_metadata": {
      "stringMetadata": [
        {
          "name": "title",
          "value": "999"
        },
        {
          "name": "description",
          "value": "Earn Great Rewards"
        },
        {
          "name": "cq:lastReplicationAction",
          "value": "Activate"
        }
      ]
    }
  }


  const languageItems = [
    {id: 1, name: 'English'},
    {id: 2, name: 'Japanese'},
    {id: 3, name: 'Chinese'}
  ];
  
  const variationsItems = [
    {id: 1, name: 'Default'},
    {id: 2, name: 'Long Term Customers'},
    {id: 3, name: 'Students'},
    {id: 4, name: 'High Value'}
  ];
  
  const [state,setState] = useState({contentfragment: defaultcontent, languageList: languageItems, variationsList: variationsItems})

  const getContentFragment = () => {
    let options = {};
    const persistedquery = `/graphql/execute.json/securbank/OfferByPath;path=${cf};variation=${variationname};ts=${Math.random()*1000}`;
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
              console.log("Variations:" + contentfragment.data.offerByPath.item._variations);
              console.log("Tags:" + contentfragment.data.offerByPath.item._tags);
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

  const variationname = cfpath.get('variation')

  if (variationname)
    console.log('Content Fragment Variation: ', variationname)
  else
  variationname = 'Not found - Displaying Placeholder Content'
  

  useEffect(() => {
    getContentFragment();
  }, [])

  return (
    <View>
      <Heading level={1}>Content Previewer</Heading>
      <Heading level={4}>Path: {cf}</Heading> 
      <Heading level={4}>Variation: {variationname}</Heading> 
      <Heading level={4}>Description: {state.contentfragment._metadata.stringMetadata.find(x => x.name === 'description').value}</Heading> 


      <TagGroup label="Variations" items={variationsItems} aria-label="Variations TagGroup">
          {item => <Item>{item.name}</Item>}
      </TagGroup>
      
      <TagGroup label="Languages" items={languageItems} aria-label="Languages TagGroup">
          {item => <Item>{item.name}</Item>}
      </TagGroup>

      <CFBanner1920x390 contentfragment={state.contentfragment} label="Banner Ad 1920 x 390" aemauthorurl={aemauthorurl}></CFBanner1920x390>
      <CFBanner1300x435 contentfragment={state.contentfragment} label="Banner Ad 1300 x 435" aemauthorurl={aemauthorurl}></CFBanner1300x435>
      <CFBanner440x770 contentfragment={state.contentfragment} label="Banner Ad 440 x 770" aemauthorurl={aemauthorurl}></CFBanner440x770>
      <CFDigitalSignage1080x1920 contentfragment={state.contentfragment} label="Digital Signage 1080 x 1920" aemauthorurl={aemauthorurl}></CFDigitalSignage1080x1920>
    </View>
  );

}


 