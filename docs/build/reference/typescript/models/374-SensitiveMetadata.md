
# SensitiveMetadata

This is optional metatdata attached to a sensitive piece of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**match** | [**TextMatch**](TextMatch) |  | [optional] [default to undefined]
**entropy** | **number** | entropy of the sensitive | [optional] [default to undefined]

## Example

```typescript
import { SensitiveMetadata } from '';

// TODO: Update the object below with actual values
const example: SensitiveMetadata = {
    "schema": null, // 
    "match": null, // 
    "entropy": null, // entropy of the sensitive
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SensitiveMetadata;
console.log(exampleParsed);
```




