/* 
* <license header>
*/

import React from 'react'
import { NavLink } from 'react-router-dom'
import { Heading, Header, View, TagGroup, Item } from '@adobe/react-spectrum'


function SideBar ({cf,variationname, contentfragment}) {


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

  const layoutItems = [
    {id: 1, name: 'Banner Ad 1920 x 390'},
    {id: 2, name: 'Banner Ad 1300 x 435'},
    {id: 3, name: 'Banner Ad 440 x 770'},
    {id: 4, name: 'Digital Signage 1080 x 1920'}
  ];

  return (
    <View position='sticky' top='size-0' start='size-0' >
      <Heading level={1}>Content Fragment Preview</Heading>
      <Heading level={4}><strong>Path:</strong><br/>{cf}</Heading> 
      <Heading level={4}><strong>Variation:</strong><br/>{variationname}</Heading> 
      <Heading level={4}><strong>Description:</strong><br/>{contentfragment._metadata.stringMetadata.find(x => x.name === 'description').value}</Heading> 

      <Header><strong>Variations</strong></Header>
      <TagGroup items={variationsItems} aria-label="Variations TagGroup" marginBottom="10px">
          {item => <Item>{item.name}</Item>}
      </TagGroup>
      
      <Header><strong>Languages</strong></Header>
      <TagGroup items={languageItems} aria-label="Languages TagGroup" marginBottom="10px">
          {item => <Item>{item.name}</Item>}
      </TagGroup>

      <Header><strong>Layouts</strong></Header>
      <TagGroup items={layoutItems} aria-label="Layouts TagGroup" marginBottom="10px">
          {item => <Item>{item.name}</Item>}
      </TagGroup>

      </View>
  )
}

export default SideBar
