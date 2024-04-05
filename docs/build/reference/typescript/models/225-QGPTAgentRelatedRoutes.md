
# QGPTAgentRelatedRoutes

This is specific for all the related materials, like people, tags, websites... xyz

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**people** | **boolean** | optional bool, that will say if we reccomend to run related.people on this conversation, IFF set to TRUE. | [optional] [default to undefined]

## Example

```typescript
import { QGPTAgentRelatedRoutes } from '';

// TODO: Update the object below with actual values
const example: QGPTAgentRelatedRoutes = {
    "schema": null, // 
    "people": null, // optional bool, that will say if we reccomend to run related.people on this conversation, IFF set to TRUE.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTAgentRelatedRoutes;
console.log(exampleParsed);
```




