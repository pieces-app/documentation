
# WorkstreamEvents

This is a collection of many Shadow Activity events.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;WorkstreamEvent&gt;**](WorkstreamEvent)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { WorkstreamEvents } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: WorkstreamEvents = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamEvents;
console.log(exampleParsed);
```


