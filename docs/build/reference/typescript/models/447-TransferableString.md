---
title: TransferableString | TypeScript SDK
---


# TransferableString

This is a String representaion of any of these changes.  [NOT IMPLEMENTED] base64, base64_url, data_url [IMPLEMENTED] raw

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**raw** | **string**
**base64** | **string**
**base64Url** | **string**
**dataUrl** | **string**

## Example

```typescript
import { TransferableString } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TransferableString = {
    "schema": null,
    "raw": null,
    "base64": null,
    "base64Url": null,
    "dataUrl": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferableString
console.log(exampleParsed)
```


