---
title: SeededDiscoverableHtmlWebpage | TypeScript SDK
---


# SeededDiscoverableHtmlWebpage


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**url** | **string**
**page** | **string**

## Example

```typescript
import { SeededDiscoverableHtmlWebpage } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDiscoverableHtmlWebpage = {
    "schema": null,
    "url": null,
    "page": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableHtmlWebpage
console.log(exampleParsed)
```


