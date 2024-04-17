---
title: Models | TypeScript SDK
---


# Models

This is a List of MachineLearning Models

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Model&gt;**](Model)

## Example

```typescript
import { Models } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Models = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Models
console.log(exampleParsed)
```


