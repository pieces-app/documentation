
# SearchedAsset Model

This is a modle that will represent a searched asset!

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | [**Asset**](Asset)
**exact** | **boolean**
**score** | **number**
**match** | [**SearchedMatchEnum**](SearchedMatchEnum)
**identifier** | **string**
**pseudo** | **boolean**

## Example Model

```typescript
import { SearchedAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SearchedAsset = {
    "schema": null,
    "asset": null,
    "exact": null,
    "score": null,
    "match": null,
    "identifier": null,
    "pseudo": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchedAsset
console.log(exampleParsed)
```


