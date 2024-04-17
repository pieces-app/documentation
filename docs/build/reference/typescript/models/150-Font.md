---
title: Font | TypeScript SDK
---


# Font

This will describe the font that the user sees.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**size** | **number**

## Example

```typescript
import { Font } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Font = {
    "schema": null,
    "size": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Font
console.log(exampleParsed)
```


