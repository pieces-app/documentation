---
title: Annotations | TypeScript SDK
---


# Annotations

This is the plural of Annotation

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Annotation&gt;**](Annotation)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { Annotations } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Annotations = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Annotations
console.log(exampleParsed)
```


