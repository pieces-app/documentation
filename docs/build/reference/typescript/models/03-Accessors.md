
# Accessors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;Accessor&gt;**](Accessor) |  | [default to undefined]

## Example

```typescript
import { Accessors } from '';

// TODO: Update the object below with actual values
const example: Accessors = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Accessors;
console.log(exampleParsed);
```




