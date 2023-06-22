/* 
* <license header>
*/

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Heading, Header, ActionGroup, ActionButton, Text,Button, View, TagGroup, Item } from '@adobe/react-spectrum'


function SideBar ({cfpath,variationname, contentfragment}) {


  let [count, setCount] = React.useState(0);
  let [action, setAction] = React.useState(null);
  
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

  const tags = [
    {id: 1, name: 'Subscribers'}
  ];

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const cfeditorpath = "https://experience.adobe.com/?repo=author-p55117-e571178.adobeaemcloud.com#/@mark-szulc/aem/cf/editor/editor" + cfpath;
  console.log("cfeditorpath", cfeditorpath);

  let selected

  return (
    <View position='sticky' top='size-0' start='size-0' >
      <Heading level={1}>Content Fragment Preview</Heading>
      <Heading level={4}><strong>Path:</strong><br/>{cfpath}</Heading> 
      <Heading level={4}><strong>Variation:</strong><br/>{variationname}</Heading> 
      <Heading level={4}><strong>Description:</strong><br/>{contentfragment._metadata.stringMetadata.find(x => x.name === 'description').value}</Heading> 

      <Header><strong>Tags</strong></Header>
      <TagGroup items={tags} aria-label="TagGroup" marginBottom="10px">
          {item => <Item>{item.name}</Item>}
      </TagGroup>

      <Header><strong>Variations</strong></Header>
      <ActionGroup selectionMode="single" selectedKeys={selected} defaultSelectedKeys={[variationname]} marginTop="10px" marginBottom="20px">
        <Item key="main">Main</Item>
        <Item key="long term">Long Term Customers</Item>
        <Item key="students">Students</Item>
        <Item key="high-value">High Value</Item>
      </ActionGroup>

      <Header><strong>Languages</strong></Header>
      <ActionGroup selectionMode="single" selectedKeys={selected} defaultSelectedKeys={['en']} marginTop="10px" marginBottom="20px" onSelectionChange={() => openInNewTab("#")}>
        <Item key="en">English</Item>
        <Item key="ja" >Japanese</Item>
        <Item key="zo">Chinese</Item>
        <Item key="ko">Korean</Item>
      </ActionGroup>

      <Header><strong>Layouts</strong></Header>
      <TagGroup items={layoutItems} aria-label="Layouts TagGroup" marginBottom="20px">
          {item => <Item>{item.name}</Item>}
      </TagGroup>

      <Button width="size-1000"  aria-label="Edit Content Fragment" onPress={() => openInNewTab(cfeditorpath)}><Text>Edit</Text></Button>
      </View>
  )
}

export default SideBar
