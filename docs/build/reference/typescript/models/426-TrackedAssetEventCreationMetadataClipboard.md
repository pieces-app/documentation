---
title: TrackedAssetEventCreationMetadataClipboard | TypeScript SDK
---


# TrackedAssetEventCreationMetadataClipboard

If an asset was created from a clipboard event

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**keyboard** | **boolean**
**interaction** | **boolean**

## Example

```typescript
import { TrackedAssetEventCreationMetadataClipboard } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetEventCreationMetadataClipboard = {
    "schema": null,
    "keyboard": null,
    "interaction": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventCreationMetadataClipboard
console.log(exampleParsed)
```


