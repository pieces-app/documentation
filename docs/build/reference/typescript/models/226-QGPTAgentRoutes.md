
# QGPTAgentRoutes

This is apart of the Output and will let the plugin developer know if we reccomend to run specific agent functionality/routes. for instance, related.people, code classification...xyz, for now we start with relatedPeople.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**related** | [**QGPTAgentRelatedRoutes**](QGPTAgentRelatedRoutes) |  | [optional] [default to undefined]

## Example

```typescript
import { QGPTAgentRoutes } from '';

// TODO: Update the object below with actual values
const example: QGPTAgentRoutes = {
    "schema": null, // 
    "related": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTAgentRoutes;
console.log(exampleParsed);
```




