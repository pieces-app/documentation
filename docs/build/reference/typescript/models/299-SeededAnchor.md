
# SeededAnchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | [default to undefined]
**watch** | **boolean** |  | [optional] [default to undefined]
**fullpath** | **string** |  | [default to undefined]
**asset** | **string** | You may associate a SeededAnchor with an asset | [optional] [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation) |  | [optional] [default to undefined]
**conversation** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { SeededAnchor } from '';

// TODO: Update the object below with actual values
const example: SeededAnchor = {
    "schema": null, // 
    "type": null, // 
    "watch": null, // 
    "fullpath": null, // 
    "asset": null, // You may associate a SeededAnchor with an asset
    "platform": null, // 
    "name": null, // 
    "annotations": null, // 
    "conversation": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnchor;
console.log(exampleParsed);
```




