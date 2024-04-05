
# FlattenedShare

This is a dag safe version of the Share.  if user is undefined && access is public then we have an asset that is publicly available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | This references the share it self. | [default to undefined]
**asset** | **string** | this is the asset id on the flattened share. | [optional] [default to undefined]
**user** | **string** | this is the uuid of the user that the share is created for. | [optional] [default to undefined]
**link** | **string** | this is the prebuilt link. | [default to undefined]
**access** | [**AccessEnum**](AccessEnum) |  | [default to undefined]
**accessors** | [**Accessors**](Accessors) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**_short** | **string** | This is a shortened version of our uuid. | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**distributions** | [**FlattenedDistributions**](FlattenedDistributions) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedShare } from '';

// TODO: Update the object below with actual values
const example: FlattenedShare = {
    "schema": null, // 
    "id": null, // This references the share it self.
    "asset": null, // this is the asset id on the flattened share.
    "user": null, // this is the uuid of the user that the share is created for.
    "link": null, // this is the prebuilt link.
    "access": null, // 
    "accessors": null, // 
    "created": null, // 
    "_short": null, // This is a shortened version of our uuid.
    "name": null, // 
    "assets": null, // 
    "distributions": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedShare;
console.log(exampleParsed);
```




