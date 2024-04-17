---
title: FlattenedWorkstreamEvent | TypeScript SDK
---


# FlattenedWorkstreamEvent

This is a singular (DAG Safe) version of a WorkstreamEvent.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**application** | [**Application**](Application)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**trigger** | [**WorkstreamEventTrigger**](WorkstreamEventTrigger)
**metadata** | [**WorkstreamEventTriggerMetadata**](WorkstreamEventTriggerMetadata)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)

## Example

```typescript
import { FlattenedWorkstreamEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedWorkstreamEvent = {
    "schema": null,
    "id": null,
    "score": null,
    "application": null,
    "created": null,
    "updated": null,
    "trigger": null,
    "metadata": null,
    "summaries": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWorkstreamEvent
console.log(exampleParsed)
```


