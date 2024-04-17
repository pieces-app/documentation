---
title: SeededDiscoverableSensitives | TypeScript SDK
---


# SeededDiscoverableSensitives


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;SeededDiscoverableSensitive&gt;**](SeededDiscoverableSensitive)
**application** | **string**

## Example

```typescript
import { SeededDiscoverableSensitives } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededDiscoverableSensitives = {
    "schema": null,
    "iterable": null,
    "application": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableSensitives
console.log(exampleParsed)
```


