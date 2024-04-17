---
title: SeededWorkstreamEvent | TypeScript SDK
---


# SeededWorkstreamEvent

This is a precreated version of a WorkstreamEvent event, this will be used ingested into PiecesOS and PiecesOS will do all the magic to transform this into relevant data show in the workstream feed.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**score** | [**Score**](Score)
**application** | [**Application**](Application)
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger)
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata)
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary)
**internalIdentifier** | **string**

## Example

```typescript
import { SeededWorkstreamEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededWorkstreamEvent = {
    "schema": null,
    "score": null,
    "application": null,
    "trigger": null,
    "metadata": null,
    "summary": null,
    "internalIdentifier": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWorkstreamEvent
console.log(exampleParsed)
```


