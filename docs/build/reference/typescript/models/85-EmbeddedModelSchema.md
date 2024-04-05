
# EmbeddedModelSchema

This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration** | **number** | this is the current database version that this model was used for. | [default to undefined]
**semantic** | [**EmbeddedModelSchemaSemanticVersionEnum**](EmbeddedModelSchemaSemanticVersionEnum) |  | [default to undefined]

## Example

```typescript
import { EmbeddedModelSchema } from '';

// TODO: Update the object below with actual values
const example: EmbeddedModelSchema = {
    "migration": null, // this is the current database version that this model was used for.
    "semantic": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddedModelSchema;
console.log(exampleParsed);
```




