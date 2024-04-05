
# AnchorPoints

This is the plural of AnchorPoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;AnchorPoint&gt;**](AnchorPoint) |  | [default to undefined]
**indices** | **\{ [key: string]: number; \}** | This is a Map&lt;String, int&gt; where the the key is an AnchorPoint id. | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { AnchorPoints } from '';

// TODO: Update the object below with actual values
const example: AnchorPoints = {
    "schema": null, // 
    "iterable": null, // 
    "indices": null, // This is a Map&lt;String, int&gt; where the the key is an AnchorPoint id.
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnchorPoints;
console.log(exampleParsed);
```




