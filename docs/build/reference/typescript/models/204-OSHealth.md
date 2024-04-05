
# OSHealth

This is a specific model for the health of our OS Server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | id of your OS | [default to undefined]
**version** | **string** | this is the current OS version | [default to undefined]

## Example

```typescript
import { OSHealth } from '';

// TODO: Update the object below with actual values
const example: OSHealth = {
    "schema": null, // 
    "id": null, // id of your OS
    "version": null, // this is the current OS version
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSHealth;
console.log(exampleParsed);
```




