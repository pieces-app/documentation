---
title: SeededAssetSensitive | TypeScript SDK
---


# SeededAssetSensitive

This is the seededAssetSensitive, this does not have an id yet as we will add it on the server side.  can optionally pass in our mechanism here, as the default will be manual unless specified.  This is different that hte SeededSensitive as this is pre-before the asset has been created.(but added when the asset is created.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum)
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum)
**name** | **string**
**description** | **string**
**metadata** | [**SensitiveMetadata**](SensitiveMetadata)

## Example

```typescript
import { SeededAssetSensitive } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAssetSensitive = {
    "schema": null,
    "text": null,
    "mechanism": null,
    "category": null,
    "severity": null,
    "name": null,
    "description": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetSensitive
console.log(exampleParsed)
```


