
# OrderedMetrics

This is a returnable for the metrics/formats/ordered

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**ordered** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { OrderedMetrics } from '';

// TODO: Update the object below with actual values
const example: OrderedMetrics = {
    "schema": null, // 
    "ordered": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderedMetrics;
console.log(exampleParsed);
```




