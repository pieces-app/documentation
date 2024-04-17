
# SeededWebsite

This is the minimum information required to create a website for a specific asset.  you can optionally add an asset, or person id to attach this website directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | **string**
**conversation** | **string**
**url** | **string**
**name** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**person** | **string**

## Example

```typescript
import { SeededWebsite } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededWebsite = {
    "schema": null,
    "asset": null,
    "conversation": null,
    "url": null,
    "name": null,
    "mechanism": null,
    "person": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWebsite
console.log(exampleParsed)
```


