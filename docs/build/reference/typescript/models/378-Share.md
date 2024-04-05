
# Share

This represents what information that is relavent to anything and every sharing related. v1 will look very bare and will add more and more data as we go!  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | This is the uuid that represents this share model. | [default to undefined]
**user** | **string** | this is the uuid of the user that the share is created for. | [optional] [default to undefined]
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**link** | **string** | This is the prebuilt link. | [default to undefined]
**access** | [**AccessEnum**](AccessEnum) |  | [default to undefined]
**accessors** | [**Accessors**](Accessors) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**_short** | **string** | This is a shortened version of our uuid. | [default to undefined]
**name** | **string** | this is an optional name we can give to the link, ie ?p&#x3D;JAVASCRIPT or what ever the user wants as long as it is available. | [optional] [default to undefined]
**distributions** | [**Distributions**](Distributions) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { Share } from '';

// TODO: Update the object below with actual values
const example: Share = {
    "schema": null, // 
    "id": null, // This is the uuid that represents this share model.
    "user": null, // this is the uuid of the user that the share is created for.
    "asset": null, // 
    "assets": null, // 
    "link": null, // This is the prebuilt link.
    "access": null, // 
    "accessors": null, // 
    "created": null, // 
    "_short": null, // This is a shortened version of our uuid.
    "name": null, // this is an optional name we can give to the link, ie ?p&#x3D;JAVASCRIPT or what ever the user wants as long as it is available.
    "distributions": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Share;
console.log(exampleParsed);
```




