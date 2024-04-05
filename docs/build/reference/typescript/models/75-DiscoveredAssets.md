
# DiscoveredAssets

This is a plural Model that is used within the bulk upload flow in both cases of a file(&& needing snippitization) as well as if the fragments are passed in and they only need to be clustered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**application** | **string** | application id. | [default to undefined]
**iterable** | [**Array&lt;DiscoveredAsset&gt;**](DiscoveredAsset) | This is an iterable of already snippitized snippets that have been clustered.(These are assets that are going to be uploaded or at minimum the assets that we reccommend to upload) | [default to undefined]

## Example

```typescript
import { DiscoveredAssets } from '';

// TODO: Update the object below with actual values
const example: DiscoveredAssets = {
    "schema": null, // 
    "application": null, // application id.
    "iterable": null, // This is an iterable of already snippitized snippets that have been clustered.(These are assets that are going to be uploaded or at minimum the assets that we reccommend to upload)
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredAssets;
console.log(exampleParsed);
```




