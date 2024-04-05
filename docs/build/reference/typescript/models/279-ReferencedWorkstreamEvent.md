
# ReferencedWorkstreamEvent

This is a minimal representation of a WorkstreamEvent event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedWorkstreamEvent**](FlattenedWorkstreamEvent) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedWorkstreamEvent } from '';

// TODO: Update the object below with actual values
const example: ReferencedWorkstreamEvent = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedWorkstreamEvent;
console.log(exampleParsed);
```




