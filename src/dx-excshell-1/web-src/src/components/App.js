/* 
* <license header>
*/
import React, { useEffect, useState } from 'react'
import { Provider, defaultTheme, colorScheme, Grid, View } from '@adobe/react-spectrum'
import ErrorBoundary from 'react-error-boundary'
import { HashRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './Home'
import SideBar from './SideBar'

function App (props) {
  console.log('runtime object:', props.runtime)
  console.log('ims object:', props.ims)

  const cfparam = new URLSearchParams(document.location.search)
  const cfpath = cfparam.get('cf')
  const variationname = cfparam.get('variation')

  if (cfpath) {
    console.log('Content Fragment Path: ', cfpath);
  }
  else
  cfpath = 'Not found - Displaying Placeholder Content'

  // use exc runtime event handlers
  // respond to configuration change events (e.g. user switches org)
  props.runtime.on('configuration', ({ imsOrg, imsToken, locale }) => {
    console.log('configuration change', { imsOrg, imsToken, locale })
  })
  // respond to history change events
  props.runtime.on('history', ({ type, path }) => {
    console.log('history change', { type, path })
  })

  const aemauthorurl = 'https://author-p55117-e571178.adobeaemcloud.com';
    
  const defaultcontent = {
    "headline": "Headline",
    "pretitle": "Pretitle",
    "detail": {
      "plaintext": "Detail"
    },
    "callToAction": "Call to Action",
    "heroImage": {
      "_publishUrl": "",
      "_authorUrl": "https://placehold.co/2000x2000",
      "_dynamicUrl": ""
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


 
  
  const [state,setState] = useState({contentfragment: defaultcontent})

  const getContentFragment = () => {
    let options = {};
    const persistedquery = `/graphql/execute.json/securbank/OfferByPath;path=${cfpath};variation=${variationname};ts=${Math.random()*1000}`;
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



  if (cfpath)
    console.log('Content Fragment Path: ', cfpath)
  else
  cfpath = 'Not found - Displaying Placeholder Content'

  

  if (variationname)
    console.log('Content Fragment Variation: ', variationname)
  else
  variationname = 'Not found - Displaying Placeholder Content'
  

  useEffect(() => {
    getContentFragment();
    
  }, [])

  return (
    <ErrorBoundary onError={onError} FallbackComponent={fallbackComponent}>
      <Router>
        <Provider theme={defaultTheme} colorScheme='light' >
        <Grid
            areas={['sidebar content']}
            columns={['300px', '3fr']}
            rows={['auto']}
            gap='size-100'
          >
            <View 
                gridArea='sidebar'
                padding='size-200'>
                <SideBar cfpath={cfpath} variationname={variationname} contentfragment={state.contentfragment}></SideBar>
            </View>
            <View
              paddingTop='size-600'>
              <Home cfpath={cfpath} contentfragment={state.contentfragment}></Home>
            </View>
            </Grid>
        </Provider>
      </Router>
    </ErrorBoundary>
  )

  // Methods

  // error handler on UI rendering failure
  function onError (e, componentStack) { }



  // component to show if UI fails rendering
  function fallbackComponent ({ componentStack, error }) {
    return (
      <React.Fragment>
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Something went wrong :(
        </h1>
        <pre>{componentStack + '\n' + error.message}</pre>
      </React.Fragment>
    )
  }
}

export default App
