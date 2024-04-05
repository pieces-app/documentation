
# Ranges

This is a collection of many Ranges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;Range&gt;**](Range) |  | [default to undefined]
**indices** | **\{ [key: string]: number; \}** | This is a Map&lt;String, int&gt; where the the key is an range id. | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**continuous** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { Ranges } from '';

// TODO: Update the object below with actual values
const example: Ranges = {
    "schema": null, // 
    "iterable": null, // 
    "indices": null, // This is a Map&lt;String, int&gt; where the the key is an range id.
    "score": null, // 
    "continuous": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Ranges;
console.log(exampleParsed);
```




