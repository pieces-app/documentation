
# SeededAssetsRecommendation Model

This is the input data model for the /assets/recommend [GET] endpoint. It includes both a list of assets but also 

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**assets** | [**Assets**](Assets)
**interactions** | [**InteractedAssets**](InteractedAssets)

## Example Model

```typescript
import { SeededAssetsRecommendation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAssetsRecommendation = {
    "schema": null,
    "assets": null,
    "interactions": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetsRecommendation
console.log(exampleParsed)
```


