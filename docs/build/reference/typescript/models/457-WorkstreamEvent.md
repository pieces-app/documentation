---
title: WorkstreamEvent | TypeScript SDK
---


# WorkstreamEvent

This is a Shadow Activity event:  This is used to for 2 collections the internal Shadow Activity collection and the Shadow Activity Collection.  The Internal Shadow Activity will me just a massive growing and shrinkling persisted list activity event that will endup getting rolled up into Workstream summaries. When we roll up the internalWorkstreamEvent events we will do a ton of filtering and only take the highly relevant events and turn them into WorkstreamEvent (these will be used to create a reference to the workstream summary, so we can know what event were used to generate the summary and vise versa).  A Shadow Activity model is a collection of a ton of small interactions with the plugins (copy/paste/file open/file close/tab changed/...etc events) that will also enable use to know what materials are being used to funnel them into our engine to show highly relevant data according to your given flow.

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
import { WorkstreamEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamEvent = {
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
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamEvent
console.log(exampleParsed)
```


