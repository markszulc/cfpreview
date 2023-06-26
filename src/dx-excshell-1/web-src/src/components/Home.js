import React, { useEffect, useState } from 'react'
import { Heading, View, TagGroup, Item } from '@adobe/react-spectrum'
import CFBanner1920x390 from './layouts/CFBanner1920x390'
import CFBanner1300x435 from './layouts/CFBanner1300x435'
import CFBanner440x770 from './layouts/CFBanner440x770'
import CFApp150x150 from './layouts/CFApp150x150'
import CFDigitalSignage1080x1920 from './layouts/CFSignage1080x1920'

export default function Home({cfpath, contentfragment}) {

  return (
    <View>
      <CFBanner1920x390 cfpath={cfpath} contentfragment={contentfragment} label="Web Banner 1920 x 390"></CFBanner1920x390>
      <CFBanner1300x435 cfpath={cfpath} contentfragment={contentfragment} label="Web Banner 1300 x 435"></CFBanner1300x435>
      <CFBanner440x770 contentfragment={contentfragment} label="Web Banner 440 x 770"></CFBanner440x770>
      <CFApp150x150 contentfragment={contentfragment} label="App 150 x 150"></CFApp150x150>
      <CFDigitalSignage1080x1920 contentfragment={contentfragment} label="Digital Signage 1080 x 1920"></CFDigitalSignage1080x1920>
    </View>
  );

}


 