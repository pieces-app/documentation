
# SeededAsset

This is seed data that will be come an asset.  discovered: if set to true this seededAsset was discovered using one of our discovery endpoints.  pseudo: if this is an asset that a user did NOT explicitly save.  available: This is a model that is used within our \'/assets/draft\' endpoint that will emitt a seed with all the available format that one can generate based on the original seed that was passed in. ie if a png was passed in, we may  say that there is a text/code format available. If available formats is passed into the \'/assets/create\' we will short curcuit certain operations to speed up the process, for instance, if we determine that there is no text within this image then there is no sense in running ocr. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata) |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [default to undefined]
**format** | [**SeededFormat**](SeededFormat) |  | [default to undefined]
**discovered** | **boolean** |  | [optional] [default to undefined]
**available** | [**AvailableFormats**](AvailableFormats) |  | [optional] [default to undefined]
**pseudo** | **boolean** |  | [optional] [default to undefined]
**enrichment** | [**SeededAssetEnrichment**](SeededAssetEnrichment) |  | [optional] [default to undefined]
**demo** | **boolean** | This will let us know if this asset was generated as a \&#39;demo\&#39; snippet | [optional] [default to undefined]

## Example

```typescript
import { SeededAsset } from '';

// TODO: Update the object below with actual values
const example: SeededAsset = {
    "schema": null, // 
    "metadata": null, // 
    "application": null, // 
    "format": null, // 
    "discovered": null, // 
    "available": null, // 
    "pseudo": null, // 
    "enrichment": null, // 
    "demo": null, // This will let us know if this asset was generated as a \&#39;demo\&#39; snippet
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAsset;
console.log(exampleParsed);
```




