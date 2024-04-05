
# SuggestionTarget

This is the target that was sent to pieces. This will return the string that represents this coppied || pasted asset. This will also send along the SeededConnectorCreation and will send along the vector that we created based on the seed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation) |  | [default to undefined]
**vector** | **number** | This is the vector representation of this target that we generated. | [default to undefined]

## Example

```typescript
import { SuggestionTarget } from '';

// TODO: Update the object below with actual values
const example: SuggestionTarget = {
    "schema": null, // 
    "seed": null, // 
    "vector": null, // This is the vector representation of this target that we generated.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuggestionTarget;
console.log(exampleParsed);
```




