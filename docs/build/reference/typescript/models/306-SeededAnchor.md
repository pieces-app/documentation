---
title: SeededAnchor | TypeScript SDK
---


# SeededAnchor


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**type** | [**AnchorTypeEnum**](AnchorTypeEnum)
**watch** | **boolean**
**fullpath** | **string**
**asset** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)
**name** | **string**
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**conversation** | **string**

## Example

```typescript
import { SeededAnchor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAnchor = {
    "schema": null,
    "type": null,
    "watch": null,
    "fullpath": null,
    "asset": null,
    "platform": null,
    "name": null,
    "annotations": null,
    "conversation": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnchor
console.log(exampleParsed)
```


