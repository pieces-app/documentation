---
title: TrackedAssetsEventSearchMetadataResults | TypeScript SDK
---


# TrackedAssetsEventSearchMetadataResults

Numbers related to search results

## Properties

Name | Type
------------ | -------------
**fuzzy** | **number**
**exact** | **number**
**assets** | [**FlattenedAssets**](FlattenedAssets)
**space** | [**Space**](Space)

## Example

```typescript
import { TrackedAssetsEventSearchMetadataResults } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetsEventSearchMetadataResults = {
    "fuzzy": null,
    "exact": null,
    "assets": null,
    "space": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetsEventSearchMetadataResults
console.log(exampleParsed)
```


