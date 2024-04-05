
# DiscoveredHtmlWebpages

Assumption: The iterable will be in the exact same order as it was passed in within the seededDiscoveredHtmlWebpages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;DiscoveredHtmlWebpage&gt;**](DiscoveredHtmlWebpage) |  | [default to undefined]
**application** | **string** |  | [default to undefined]

## Example

```typescript
import { DiscoveredHtmlWebpages } from '';

// TODO: Update the object below with actual values
const example: DiscoveredHtmlWebpages = {
    "schema": null, // 
    "iterable": null, // 
    "application": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredHtmlWebpages;
console.log(exampleParsed);
```




