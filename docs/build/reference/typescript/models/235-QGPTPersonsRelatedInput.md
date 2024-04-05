
# QGPTPersonsRelatedInput

This is used for /qgpt/persons/related.  will accept a seed, or conversation all optionally. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**seed** | [**Seed**](Seed) |  | [optional] [default to undefined]
**conversation** | [**QGPTConversation**](QGPTConversation) |  | [optional] [default to undefined]
**application** | **string** | optional application id | [optional] [default to undefined]
**model** | **string** | optional model id | [optional] [default to undefined]

## Example

```typescript
import { QGPTPersonsRelatedInput } from '';

// TODO: Update the object below with actual values
const example: QGPTPersonsRelatedInput = {
    "schema": null, // 
    "seed": null, // 
    "conversation": null, // 
    "application": null, // optional application id
    "model": null, // optional model id
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTPersonsRelatedInput;
console.log(exampleParsed);
```




