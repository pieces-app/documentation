
# SeededAnchorPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | [default to undefined]
**watch** | **boolean** |  | [optional] [default to undefined]
**fullpath** | **string** |  | [default to undefined]
**anchor** | **string** | Cannot create an AnchorPoint w/o a Anchor. | [default to undefined]
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededAnchorPoint } from '';

// TODO: Update the object below with actual values
const example: SeededAnchorPoint = {
    "schema": null, // 
    "type": null, // 
    "watch": null, // 
    "fullpath": null, // 
    "anchor": null, // Cannot create an AnchorPoint w/o a Anchor.
    "platform": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAnchorPoint;
console.log(exampleParsed);
```




