/* 
* <license header>
*/

import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Heading, Header, ActionGroup, ActionButton, Slider, Text,Button, View, TagGroup, Item, Avatar, Image } from '@adobe/react-spectrum'
import EditIcon from '@spectrum-icons/workflow/Edit';
import HomeIcon from '@spectrum-icons/workflow/Home';

function SideBar ({cfpath,variationname, contentfragment}) {


  let [count, setCount] = React.useState(0);
  let [action, setAction] = React.useState(null);
  let [zoom, setZoom] = React.useState(0.7);
  let [variation, setVariation] = React.useState('main');
  let [variations, setVariations] = React.useState([]);
  let [language, setLanguage] = React.useState(cfpath.split("/")[4]);
  let showDetails = false;
  let images = [];

  const extractImageInfo = () => {
    images = [];
    cfimagepath="";
    const keys = Object.keys(contentfragment)
    keys.forEach(key => {
      if(contentfragment[key] && (contentfragment[key]._authorUrl || contentfragment[key]._publishUrl || contentfragment[key]._dynamicUrl)) {
        cfimagepath = process.env.AEM_AUTHOR + "/ui#/aem/assetdetails.html" + contentfragment[key]._path;
        console.log('Sidebar Asset Source Image Path: ', cfimagepath)
        images.push({id: key, name: cfimagepath, url: contentfragment[key]._publishUrl})
      }
    });
    console.log('Images within CF: ' + images.length)
  }

  const updateZoom = (zoomlevel) => {
    console.log(zoomlevel)
    setZoom(zoomlevel)
    document.querySelectorAll('.layout-wrapper').forEach(element => {
      element.style.zoom = zoomlevel;
    });
  }


  const updateVariation = (variation) => {
    setVariation(variation)
    console.log(variation)
    const searchParams = new URLSearchParams(document.location.search)
    console.log(searchParams)
    searchParams.set('variation', `${variation}`)
    window.location.search = searchParams.toString();
  }

  const prettifyString = (word) => {
    return word.replace('-', ' ').replace(/(?:^|\s)\S/g, a => a.toUpperCase());
  }

  const updateLanguage = (lang) => {
    console.log(lang)

    const searchParams = new URLSearchParams(document.location.search)
    console.log(language)
    
    const path = searchParams.get('cf')
    console.log(path.replace(`/${language}/`, `/${lang}/`))
    
    searchParams.set('cf', path.replace(`/${language}/`, `/${lang}/`))
    setLanguage(lang)
    window.location.search = searchParams.toString();
  }

  if (cfpath.includes('/content/dam/')) {
    showDetails = true;
  }

  console.log('Show Details: ', showDetails);

  extractImageInfo();

  const lang = cfpath.split("/")[4];
  console.log('Language code from URL: ', lang);
  let selected


  let cftags = [];
  const taglist = contentfragment._tags ? Object.keys(contentfragment._tags) : []
  taglist.forEach(key => {
      cftags.push({id: key, name: contentfragment._tags[key]})
    });


  const layoutItems = [
    {id: 1, name: 'Web Banner 1920 x 390'},
    {id: 2, name: 'Web Banner 1300 x 435'},
    {id: 3, name: 'Web Banner 440 x 770'},
    {id: 4, name: 'Email Banner 1920 x 450'},
    {id: 5, name: 'App 150 x 150'},
    {id: 6, name: 'Digital Signage 1080 x 1920'}
  ];

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const changeLanguage = lang => {
    console.log("Language Selected:", lang);
  };

  const cfeditorpath = process.env.AEM_CF_Editor_Path + cfpath;
  const cfadminpath = process.env.AEM_CF_Admin_Path;
  
  return (
    <View top='size-0' start='size-0'  >
    
      <View isHidden={!showDetails}>
        <Heading level={4}><strong>Description:</strong><br/>{contentfragment._metadata.stringMetadata.find(x => x.name === 'description').value}</Heading> 
        <Heading level={4}><strong>Path:</strong><br/>{cfpath}</Heading> 
        
        <Header><strong>Tags</strong></Header>
        <TagGroup items={cftags} aria-label="TagGroup" marginBottom="10px">
            {item => <Item>{item.name}</Item>}
        </TagGroup>

        <Header><strong>Variations</strong></Header>
        <ActionGroup selectionMode="single" selectedKeys={selected} defaultSelectedKeys={[variationname]} marginTop="10px" marginBottom="20px" onAction={updateVariation} >
          <Item key='main'><Text>Main</Text></Item>
          {contentfragment._variations.map(function(item){
            item = item.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
            return <Item key={item}><Text>{prettifyString(item)}</Text></Item>;
          })}
        </ActionGroup>

        <Header><strong>Languages</strong></Header>
        <ActionGroup selectionMode="single" selectedKeys={selected} defaultSelectedKeys={[lang]} marginTop="10px" marginBottom="20px" onAction={updateLanguage} >
          <Item key="en">English</Item>
          <Item key="ja" >Japanese</Item>
          <Item key="zo">Chinese</Item>
          <Item key="ko">Korean</Item>
        </ActionGroup>

        <Header><strong>Layouts</strong></Header>
        <TagGroup items={layoutItems} aria-label="Layouts TagGroup" marginBottom="20px">
            {item => <Item>{item.name}</Item>}
        </TagGroup>

        <Header><strong>Images</strong></Header>
        <ActionGroup items={images} aria-label="Images Tag Group" marginTop="15px" marginBottom="20px">
          {item => 
            <Item key={item.id}>
              <a
                href={item.name}
                target="_blank"
                rel="noreferrer"
              >
                <Image src={item.url} width="50px" height="50px" />
              </a>
            </Item>
          }
        </ActionGroup>

        </View>
        <Slider
          label="Zoom"
          minValue={0.1}
          maxValue={1}
          formatOptions={{ style: 'percent' }}
          step={0.01}
          defaultValue={0.7}
          fillOffset={0}
          onChange={updateZoom}
          aria-label="Zoom"
          aria-details='Zoom in and out'
          alt="Zoom"
          marginTop="20px"
        />
        <Button width="size-1000"  aria-label="Content Fragment Admin" marginTop="20px" marginEnd="10px" onPress={() => openInNewTab(cfadminpath)}><HomeIcon width="size-200" /><Text>Home</Text></Button>
        <Button  isHidden={!showDetails} width="size-1000" marginTop="20px"  aria-label="Edit Content Fragment" onPress={() => openInNewTab(cfeditorpath)}><EditIcon width="size-200" /><Text>Edit</Text></Button>
 

      </View>
  )
}

export default SideBar
