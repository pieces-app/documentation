
# FlattenedActivity

Note: - if mechanism == internal we will not display to the user.

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
**asset** | [**ReferencedAsset**](ReferencedAsset)
**format** | [**ReferencedFormat**](ReferencedFormat)
**user** | [**FlattenedUserProfile**](FlattenedUserProfile)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**rank** | **number**

## Example

```typescript
import { FlattenedActivity } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedActivity = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "event": null,
    "application": null,
    "deleted": null,
    "asset": null,
    "format": null,
    "user": null,
    "mechanism": null,
    "rank": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedActivity
console.log(exampleParsed)
```


