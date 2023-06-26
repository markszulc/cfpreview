# cfpreview

This App Builder example pulls Content Fragments from AEM and displays them in different layouts. 

## Setup

- Populate the `.env` file in the project root and fill it as shown [below](#env)
- Within the AEM UI, configure a Persisted Query that returns that conforms with the default data in App.js
- Edit the Content Fragment Model Default Preview URL Pattern to point to the path to this deployed app. eg https://experience.adobe.com/#/@myorg/custom-apps/myappname?cf=${contentFragment.path}&variation=${contentFragment.variation}

## Local Dev

- `aio app run` to start your local Dev server
- App will run on `localhost:9080` by default

By default the UI will be served locally but actions will be deployed and served from Adobe I/O Runtime. To start a
local serverless stack and also run your actions locally use the `aio app run --local` option.

## Deploy & Cleanup

- `aio app deploy` to build and deploy all actions on Runtime and static files to CDN
- `aio app undeploy` to undeploy the app

## Config

### `.env`

You can generate this file using the command `aio app use`. 

```bash
# Specify your secrets here and rename to .env
# This file must not be committed to source control
## Adobe I/O Runtime credentials
AIO_runtime_auth=XXXXXXXXXXXXXXXXXXXX
AIO_runtime_namespace=XXXXXX
AIO_runtime_apihost=https://adobeioruntime.net
## Used in App.js & Sidebar.js
AEM_AUTHOR=https://author-pXXXXX-eXXXXXX.adobeaemcloud.com
## Used in App.js
AEM_PersistedQuery=/graphql/execute.json/XXXXXXX/OfferByPath 
#Used in Sidebar.js
AEM_CF_Editor_Path=https://experience.adobe.com/?repo=author-pXXXXX-eXXXXXX.adobeaemcloud.com#/@XXXXXX/aem/cf/editor/editor
AEM_CF_Admin_Path=https://experience.adobe.com/?repo=author-pXXXXX-eXXXXXX.adobeaemcloud.com#/@XXXXXX/aem/cf/admin/
## Used in Layouts
AEM_DM=https://XXXXX.scene7.com/is/image/XXXXXX/

```
