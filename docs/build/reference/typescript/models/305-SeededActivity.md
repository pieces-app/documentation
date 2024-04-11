
# SeededActivity Model

This is the preseed to a full blown Activity.  This is the minimum information needed to create an Activity, used within our [POST] /activities/create  if mechenism is not passed in we will default to AUTOMATIC  NOT required to pass in an asset/user/format.

## Properties Model

Name | Type
------------ | -------------
**event** | [**SeededConnectorTracking**](SeededConnectorTracking)
**application** | [**Application**](Application)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**user** | [**ReferencedUser**](ReferencedUser)
**format** | [**ReferencedFormat**](ReferencedFormat)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**conversation** | [**ReferencedConversation**](ReferencedConversation)

## Example Model

```typescript
import { SeededActivity } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededActivity = {
    "event": null,
    "application": null,
    "asset": null,
    "user": null,
    "format": null,
    "mechanism": null,
    "conversation": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededActivity
console.log(exampleParsed)
```


