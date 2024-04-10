
# Activity

consider a rename to Event? That being said if we go with event we need to think about a word to pre/post fix event because it is likely to be a reserved word.  additional documentation: https://www.notion.so/getpieces/Activity-4da8de193733441f85f87b510235fb74   Notes: - user/asset/format are all optional, NOT required that one of these are present. - if mechanism == internal we will not display to the user.  Thoughts around additional properties. - hmm dismissed array here, that is an array of strings, where the string is the userId that dismissed this notification? or we could potentially do it based on the os_ID. - 

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**event** | [**SeededConnectorTracking**](SeededConnectorTracking)
**application** | [**Application**](Application)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**asset** | [**FlattenedAsset**](FlattenedAsset)
**user** | [**FlattenedUserProfile**](FlattenedUserProfile)
**format** | [**FlattenedFormat**](FlattenedFormat)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**rank** | **number**

## Example

```typescript
import { Activity } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Activity = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "event": null,
    "application": null,
    "deleted": null,
    "asset": null,
    "user": null,
    "format": null,
    "mechanism": null,
    "rank": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Activity
console.log(exampleParsed)
```


