
# SeededDiscoverableHtmlWebpage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**url** | **string** | The route of the page  | [default to undefined]
**page** | **string** | page\&#39;s html as a string | [default to undefined]

## Example

```typescript
import { SeededDiscoverableHtmlWebpage } from '';

// TODO: Update the object below with actual values
const example: SeededDiscoverableHtmlWebpage = {
    "schema": null, // 
    "url": null, // The route of the page 
    "page": null, // page\&#39;s html as a string
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableHtmlWebpage;
console.log(exampleParsed);
```




