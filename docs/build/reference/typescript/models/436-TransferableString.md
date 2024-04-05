
# TransferableString

This is a String representaion of any of these changes.  [NOT IMPLEMENTED] base64, base64_url, data_url [IMPLEMENTED] raw

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**raw** | **string** | IMPLEMENTED | [optional] [default to undefined]
**base64** | **string** | NOT IMPLEMENTED | [optional] [default to undefined]
**base64Url** | **string** | NOT IMPLEMENTED | [optional] [default to undefined]
**dataUrl** | **string** | NOT IMPLEMENTED | [optional] [default to undefined]

## Example

```typescript
import { TransferableString } from '';

// TODO: Update the object below with actual values
const example: TransferableString = {
    "schema": null, // 
    "raw": null, // IMPLEMENTED
    "base64": null, // NOT IMPLEMENTED
    "base64Url": null, // NOT IMPLEMENTED
    "dataUrl": null, // NOT IMPLEMENTED
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferableString;
console.log(exampleParsed);
```




