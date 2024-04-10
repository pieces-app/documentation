
# FlattenedWorkstreamEvents Model

This is a plural (DAG Safe) version of a WorkstreamEvents.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedWorkstreamEvent&gt;**](ReferencedWorkstreamEvent)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example Model

```typescript
import { FlattenedWorkstreamEvents } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedWorkstreamEvents = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWorkstreamEvents
console.log(exampleParsed)
```


