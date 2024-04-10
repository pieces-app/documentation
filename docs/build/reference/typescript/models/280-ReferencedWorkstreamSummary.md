
# ReferencedWorkstreamSummary

this is a referenced minimal version of a WorkstreamSummary typically just our uuid.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedWorkstreamSummary**](FlattenedWorkstreamSummary)

## Example

```typescript
import { ReferencedWorkstreamSummary } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedWorkstreamSummary = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedWorkstreamSummary
console.log(exampleParsed)
```


