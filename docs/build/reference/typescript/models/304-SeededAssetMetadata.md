
# SeededAssetMetadata Model

This is optional metadata sent with the SeededAsset and other SeededAssets ie (UE, Jetbrains...)  Note: if a user/develop didnt explicitly state a mechanism we will default to manual(user Driven only)

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**tags** | [**Array&lt;SeededAssetTag&gt;**](SeededAssetTag)
**websites** | [**Array&lt;SeededAssetWebsite&gt;**](SeededAssetWebsite)
**sensitives** | [**Array&lt;SeededAssetSensitive&gt;**](SeededAssetSensitive)
**persons** | [**Array&lt;SeededPerson&gt;**](SeededPerson)
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**hints** | [**Array&lt;SeededHint&gt;**](SeededHint)
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor)

## Example Model

```typescript
import { SeededAssetMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAssetMetadata = {
    "schema": null,
    "name": null,
    "mechanism": null,
    "tags": null,
    "websites": null,
    "sensitives": null,
    "persons": null,
    "annotations": null,
    "hints": null,
    "anchors": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetMetadata
console.log(exampleParsed)
```


