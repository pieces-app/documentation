---
title: SeededAnchorPoint | TypeScript SDK
---


# SeededAnchorPoint


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**type** | [**AnchorTypeEnum**](AnchorTypeEnum)
**watch** | **boolean**
**fullpath** | **string**
**anchor** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)

## Example

```typescript
import { SeededAnchorPoint } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAnchorPoint = {
    "schema": null,
    "type": null,
    "watch": null,
    "fullpath": null,
    "anchor": null,
    "platform": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnchorPoint
console.log(exampleParsed)
```


