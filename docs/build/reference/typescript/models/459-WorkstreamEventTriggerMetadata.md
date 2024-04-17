---
title: WorkstreamEventTriggerMetadata | TypeScript SDK
---


# WorkstreamEventTriggerMetadata

This is a free form data object that will enable additional data to be passed into SeededWorkstreamEvent, that corresponds to the event on the WorkstreamEvent.  This is a WIP object.  Need to think if we want to do something like raw:string (that is just a jsonObject) that is stringified, or if we add specific bits of data that we want. and specific fields for each event.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { WorkstreamEventTriggerMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: WorkstreamEventTriggerMetadata = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamEventTriggerMetadata
console.log(exampleParsed)
```


