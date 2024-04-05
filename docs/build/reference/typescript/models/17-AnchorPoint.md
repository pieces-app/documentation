
# AnchorPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**verified** | **boolean** |  | [optional] [default to undefined]
**fullpath** | **string** | This is the text of the path. | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] [default to undefined]
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { AnchorPoint } from '';

// TODO: Update the object below with actual values
const example: AnchorPoint = {
    "schema": null, // 
    "id": null, // 
    "verified": null, // 
    "fullpath": null, // This is the text of the path.
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "platform": null, // 
    "anchor": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnchorPoint;
console.log(exampleParsed);
```




