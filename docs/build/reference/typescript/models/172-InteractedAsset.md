
# InteractedAsset

A model that represents an asset that has been interacted with. 

## Properties

Name | Type
------------ | -------------
**asset** | **string**
**interactions** | [**InteractedAssetInteractions**](InteractedAssetInteractions)

## Example

```typescript
import { InteractedAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: InteractedAsset = {
    "asset": 6a2f41a3-c54c-fce8-32d2-0324e1c32e22,
    "interactions": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAsset
console.log(exampleParsed)
```


