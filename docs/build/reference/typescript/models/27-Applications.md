---
title: Applications | TypeScript SDK
---


# Applications

A list of all the applications

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Application&gt;**](Application)

## Example

```typescript
import { Applications } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Applications = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Applications
console.log(exampleParsed)
```


