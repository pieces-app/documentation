
# Embedding



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw** | **Array&lt;number&gt;** | this is the raw value of the embedding | [default to undefined]
**model** | [**Model**](Model) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]

## Example

```typescript
import { Embedding } from '';

// TODO: Update the object below with actual values
const example: Embedding = {
    "raw": null, // this is the raw value of the embedding
    "model": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Embedding;
console.log(exampleParsed);
```




