
# Reaction

This will the the Request body of the Request Endpoint.  Reuse will not be required here because we do NOT know if the user will choose to reuse what we have suggested.  save will however be required because this will let us know if we should save the coppied asset that was first sent over or not.  seed is required, because we will want to know 100% sure what the original suggestion was made against.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**save** | **boolean** | This will just be a simple boolean here that will say if the use should save the asset or not. | [default to undefined]
**reuse** | [**ReuseReaction**](ReuseReaction) |  | [optional] [default to undefined]
**seed** | [**SeededConnectorCreation**](SeededConnectorCreation) |  | [default to undefined]

## Example

```typescript
import { Reaction } from '';

// TODO: Update the object below with actual values
const example: Reaction = {
    "schema": null, // 
    "save": null, // This will just be a simple boolean here that will say if the use should save the asset or not.
    "reuse": null, // 
    "seed": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Reaction;
console.log(exampleParsed);
```




