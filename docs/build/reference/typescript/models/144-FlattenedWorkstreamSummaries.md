
# FlattenedWorkstreamSummaries

This is a DAG-Safe plural model of workstreamsummaries

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedWorkstreamSummary&gt;**](ReferencedWorkstreamSummary)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedWorkstreamSummaries } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedWorkstreamSummaries = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWorkstreamSummaries;
console.log(exampleParsed);
```


