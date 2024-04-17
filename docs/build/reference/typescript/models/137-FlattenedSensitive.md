---
title: FlattenedSensitive | TypeScript SDK
---


# FlattenedSensitive

This is a dereferenced representation of a sensitive pieces of data.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**text** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum)
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum)
**name** | **string**
**description** | **string**
**metadata** | [**SensitiveMetadata**](SensitiveMetadata)
**interactions** | **number**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedSensitive } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedSensitive = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "asset": null,
    "text": null,
    "mechanism": null,
    "category": null,
    "severity": null,
    "name": null,
    "description": null,
    "metadata": null,
    "interactions": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedSensitive
console.log(exampleParsed)
```


