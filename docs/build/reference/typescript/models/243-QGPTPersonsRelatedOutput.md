---
title: QGPTPersonsRelatedOutput | TypeScript SDK
---


# QGPTPersonsRelatedOutput

This model is used for the output of the /qgpt/related/persons endpoint.  Explanations here is a custom object with key value pairs, when the key is the personUUId and the value is an explanation as to why this person was reccommended.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**persons** | [**Persons**](Persons)
**explanations** | **\{ [key: string]: string; \}**

## Example

```typescript
import { QGPTPersonsRelatedOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTPersonsRelatedOutput = {
    "schema": null,
    "persons": null,
    "explanations": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTPersonsRelatedOutput
console.log(exampleParsed)
```


