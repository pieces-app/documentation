
# SeededDiscoverableHtmlWebpages


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;SeededDiscoverableHtmlWebpage&gt;**](SeededDiscoverableHtmlWebpage) |  | [default to undefined]
**application** | **string** | This is the applicaiton Id used to connect to Pieces OS. | [default to undefined]

## Example

```typescript
import { SeededDiscoverableHtmlWebpages } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableHtmlWebpages = {
    "schema": null, // 
    "iterable": null, // 
    "application": null, // This is the applicaiton Id used to connect to Pieces OS.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableHtmlWebpages;
console.log(exampleParsed);
```




