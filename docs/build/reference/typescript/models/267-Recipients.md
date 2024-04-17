---
title: Recipients | TypeScript SDK
---


# Recipients

This an iterable of People that are attached to a specific distribution ie, slack, maigun, ...etc

## Properties

Name | Type
------------ | -------------
**iterable** | [**Array&lt;PersonBasicType&gt;**](PersonBasicType)
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { Recipients } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Recipients = {
    "iterable": null,
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Recipients
console.log(exampleParsed)
```


