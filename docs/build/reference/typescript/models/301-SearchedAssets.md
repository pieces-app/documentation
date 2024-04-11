
# SearchedAssets

This is a modle that will return fro mthe search endpoint that will just contain an array of assets!

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;SearchedAsset&gt;**](SearchedAsset)
**suggested** | **number**
**exact** | **number**

## Example

```typescript
import { SearchedAssets } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SearchedAssets = {
    "schema": null,
    "iterable": null,
    "suggested": null,
    "exact": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SearchedAssets
console.log(exampleParsed)
```


