
# WorkstreamPatternEngineDataCleanupRequest Model

NOTE: if we want to remove all the data the from would be unset, the to will be right now.  from: is always in the past to: is always at least before from in our time.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ranges** | [**Array&lt;AnonymousTemporalRange&gt;**](AnonymousTemporalRange)

## Example Model

```typescript
import { WorkstreamPatternEngineDataCleanupRequest } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamPatternEngineDataCleanupRequest = {
    "schema": null,
    "ranges": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamPatternEngineDataCleanupRequest
console.log(exampleParsed)
```


