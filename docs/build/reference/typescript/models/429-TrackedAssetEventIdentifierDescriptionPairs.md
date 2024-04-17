---
title: TrackedAssetEventIdentifierDescriptionPairs | TypeScript SDK
---


# TrackedAssetEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**assetCreated** | **string**
**assetViewed** | **string**
**assetFormatCopied** | **string**
**assetFormatDownloaded** | **string**
**assetDeleted** | **string**
**assetDescriptionUpdated** | **string**
**assetNameUpdated** | **string**
**assetFormatGenericClassificationUpdated** | **string**
**assetFormatSpecificClassificationUpdated** | **string**
**assetCreationFailed** | **string**
**assetTagAdded** | **string**
**assetLinkAdded** | **string**
**assetLinkGenerated** | **string**
**assetLinkDeleted** | **string**
**assetTagDeleted** | **string**
**assetUpdated** | **string**
**assetFormatValueEdited** | **string**
**assetFormatUpdated** | **string**
**assetLinkRevoked** | **string**
**assetPersonAdded** | **string**
**assetPersonDeleted** | **string**
**assetSensitiveAdded** | **string**
**assetSensitiveDeleted** | **string**
**suggestedAssetReferenced** | **string**
**searchedAssetReferenced** | **string**
**assetReferenced** | **string**
**activityAssetReferenced** | **string**
**assetAnnotationAdded** | **string**
**assetAnnotationDeleted** | **string**
**assetAnnotationUpdated** | **string**
**assetHintAdded** | **string**
**assetHintDeleted** | **string**
**assetHintUpdated** | **string**
**assetAnchorAdded** | **string**
**assetAnchorDeleted** | **string**
**assetAnchorUpdated** | **string**

## Example

```typescript
import { TrackedAssetEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetEventIdentifierDescriptionPairs = {
    "schema": null,
    "assetCreated": null,
    "assetViewed": null,
    "assetFormatCopied": null,
    "assetFormatDownloaded": null,
    "assetDeleted": null,
    "assetDescriptionUpdated": null,
    "assetNameUpdated": null,
    "assetFormatGenericClassificationUpdated": null,
    "assetFormatSpecificClassificationUpdated": null,
    "assetCreationFailed": null,
    "assetTagAdded": null,
    "assetLinkAdded": null,
    "assetLinkGenerated": null,
    "assetLinkDeleted": null,
    "assetTagDeleted": null,
    "assetUpdated": null,
    "assetFormatValueEdited": null,
    "assetFormatUpdated": null,
    "assetLinkRevoked": null,
    "assetPersonAdded": null,
    "assetPersonDeleted": null,
    "assetSensitiveAdded": null,
    "assetSensitiveDeleted": null,
    "suggestedAssetReferenced": null,
    "searchedAssetReferenced": null,
    "assetReferenced": null,
    "activityAssetReferenced": null,
    "assetAnnotationAdded": null,
    "assetAnnotationDeleted": null,
    "assetAnnotationUpdated": null,
    "assetHintAdded": null,
    "assetHintDeleted": null,
    "assetHintUpdated": null,
    "assetAnchorAdded": null,
    "assetAnchorDeleted": null,
    "assetAnchorUpdated": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventIdentifierDescriptionPairs
console.log(exampleParsed)
```


