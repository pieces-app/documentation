
# WorkstreamPatternEngineVisionStatus

activation: can be active for forever w/ continous true, or it can be activated for the next couple hours  deactivation: here can be deactivated for forever w/ continuous true, or it can be deactivated for the next couple hours  Note: one or the other will be set and both are nullable.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**activation** | [**AnonymousTemporalRange**](AnonymousTemporalRange)
**deactivation** | [**AnonymousTemporalRange**](AnonymousTemporalRange)

## Example

```typescript
import { WorkstreamPatternEngineVisionStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamPatternEngineVisionStatus = {
    "schema": null,
    "activation": null,
    "deactivation": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamPatternEngineVisionStatus
console.log(exampleParsed)
```


