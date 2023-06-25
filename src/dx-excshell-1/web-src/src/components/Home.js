import React, { useEffect, useState } from 'react'
import { Heading, View, TagGroup, Item } from '@adobe/react-spectrum'
import CFBanner1920x390 from './CFBanner1920x390'
import CFBanner1300x435 from './CFBanner1300x435'
import CFBanner440x770 from './CFBanner440x770'
import CFApp150x150 from './CFApp150x150'
import CFDigitalSignage1080x1920 from './CFSignage1080x1920'

export default function Home({cfpath, contentfragment}) {

  const aemauthorurl = 'https://author-p55117-e571178.adobeaemcloud.com';
  
  return (
    <View>
      <CFBanner1920x390 cfpath={cfpath} contentfragment={contentfragment} label="Web Banner 1920 x 390" aemauthorurl={aemauthorurl}></CFBanner1920x390>
      <CFBanner1300x435 cfpath={cfpath} contentfragment={contentfragment} label="Web Banner 1300 x 435" aemauthorurl={aemauthorurl}></CFBanner1300x435>
      <CFBanner440x770 contentfragment={contentfragment} label="Web Banner 440 x 770" aemauthorurl={aemauthorurl}></CFBanner440x770>
      <CFApp150x150 contentfragment={contentfragment} label="App 150 x 150" aemauthorurl={aemauthorurl}></CFApp150x150>
      <CFDigitalSignage1080x1920 contentfragment={contentfragment} label="Digital Signage 1080 x 1920" aemauthorurl={aemauthorurl}></CFDigitalSignage1080x1920>
    </View>
  );

}


 