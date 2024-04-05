
# SeededAssetMetadata

This is optional metadata sent with the SeededAsset and other SeededAssets ie (UE, Jetbrains...)  Note: if a user/develop didnt explicitly state a mechanism we will default to manual(user Driven only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** | This is the name of the asset. | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**tags** | [**Array&lt;SeededAssetTag&gt;**](SeededAssetTag) | (optional) can add some tags to associate to this asset. | [optional] [default to undefined]
**websites** | [**Array&lt;SeededAssetWebsite&gt;**](SeededAssetWebsite) |  | [optional] [default to undefined]
**sensitives** | [**Array&lt;SeededAssetSensitive&gt;**](SeededAssetSensitive) |  | [optional] [default to undefined]
**persons** | [**Array&lt;SeededPerson&gt;**](SeededPerson) |  | [optional] [default to undefined]
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation) |  | [optional] [default to undefined]
**hints** | [**Array&lt;SeededHint&gt;**](SeededHint) |  | [optional] [default to undefined]
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededAssetMetadata } from '';

// TODO: Update the object below with actual values
const example: SeededAssetMetadata = {
    "schema": null, // 
    "name": null, // This is the name of the asset.
    "mechanism": null, // 
    "tags": null, // (optional) can add some tags to associate to this asset.
    "websites": null, // 
    "sensitives": null, // 
    "persons": null, // 
    "annotations": null, // 
    "hints": null, // 
    "anchors": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAssetMetadata;
console.log(exampleParsed);
```




