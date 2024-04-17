---
title: DiscoveredHtmlWebpage | TypeScript SDK
---


# DiscoveredHtmlWebpage

This will return assets that were extracted from the html webpage. This will contain the original url so you can double check the results wtih the results you passed in, but it will remain in the same order that it was passed in if used within the /discover/discover/html/webpage endpoint.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**assets** | [**DiscoveredAssets**](DiscoveredAssets)
**url** | **string**

## Example

```typescript
import { DiscoveredHtmlWebpage } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DiscoveredHtmlWebpage = {
    "schema": null,
    "assets": null,
    "url": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredHtmlWebpage
console.log(exampleParsed)
```


