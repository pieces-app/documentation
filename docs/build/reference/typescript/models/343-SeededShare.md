
# SeededShare

 required to pass in an asset or assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**asset** | [**Asset**](Asset) |  | [optional] [default to undefined]
**users** | [**Array&lt;SeededUser&gt;**](SeededUser) | if private please specificy some users you want to share this with. | [optional] [default to undefined]
**access** | [**AccessEnum**](AccessEnum) |  | [default to undefined]
**assets** | [**Assets**](Assets) |  | [optional] [default to undefined]
**name** | **string** | optional name, if it is available. and must be unique. | [optional] [default to undefined]

## Example

```typescript
import { SeededShare } from '';

// TODO: Update the object below with actual values
const example: SeededShare = {
    "schema": null, // 
    "asset": null, // 
    "users": null, // if private please specificy some users you want to share this with.
    "access": null, // 
    "assets": null, // 
    "name": null, // optional name, if it is available. and must be unique.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededShare;
console.log(exampleParsed);
```




