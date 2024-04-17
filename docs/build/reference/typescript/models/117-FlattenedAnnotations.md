---
title: FlattenedAnnotations | TypeScript SDK
---


# FlattenedAnnotations

This is a flattened plural of Annotation, typically this will just be a list of uuids.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedAnnotation&gt;**](ReferencedAnnotation)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedAnnotations } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAnnotations = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnnotations
console.log(exampleParsed)
```


