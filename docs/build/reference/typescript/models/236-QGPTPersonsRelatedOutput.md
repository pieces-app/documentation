
# QGPTPersonsRelatedOutput

This model is used for the output of the /qgpt/related/persons endpoint.  Explanations here is a custom object with key value pairs, when the key is the personUUId and the value is an explanation as to why this person was reccommended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**persons** | [**Persons**](Persons) |  | [default to undefined]
**explanations** | **\{ [key: string]: string; \}** | This is a Map&lt;String, String&gt; where the the key is a person id. and the value is the explanation. | [optional] [default to undefined]

## Example

```typescript
import { QGPTPersonsRelatedOutput } from '';

// TODO: Update the object below with actual values
const example: QGPTPersonsRelatedOutput = {
    "schema": null, // 
    "persons": null, // 
    "explanations": null, // This is a Map&lt;String, String&gt; where the the key is a person id. and the value is the explanation.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTPersonsRelatedOutput;
console.log(exampleParsed);
```




