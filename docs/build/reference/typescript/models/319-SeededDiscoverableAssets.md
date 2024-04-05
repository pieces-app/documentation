
# SeededDiscoverableAssets

Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**application** | **string** | application id. | [default to undefined]
**iterable** | [**Array&lt;SeededDiscoverableAsset&gt;**](SeededDiscoverableAsset) | This is an iterable of already snippitized snippets that we will compare &amp;&amp; cluster. | [default to undefined]
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededDiscoverableAssets } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableAssets = {
    "schema": null, // 
    "application": null, // application id.
    "iterable": null, // This is an iterable of already snippitized snippets that we will compare &amp;&amp; cluster.
    "filters": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableAssets;
console.log(exampleParsed);
```




