---
title: WorkstreamPatternEngineStatus | TypeScript SDK
---


# WorkstreamPatternEngineStatus

This will return the status for the Workstream pettern engine, specifically the activation/deactivation status

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**vision** | [**WorkstreamPatternEngineVisionStatus**](WorkstreamPatternEngineVisionStatus)

## Example

```typescript
import { WorkstreamPatternEngineStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamPatternEngineStatus = {
    "schema": null,
    "vision": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamPatternEngineStatus
console.log(exampleParsed)
```


