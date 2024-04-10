
# ReferencedWorkstreamEvent Model

This is a minimal representation of a WorkstreamEvent event.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedWorkstreamEvent**](FlattenedWorkstreamEvent)

## Example Model

```typescript
import { ReferencedWorkstreamEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedWorkstreamEvent = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedWorkstreamEvent
console.log(exampleParsed)
```


