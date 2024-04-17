---
title: FlattenedRange | TypeScript SDK
---


# FlattenedRange

This is a DAG-Safe minimal representation of a Range.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**to** | [**GroupedTimestamp**](GroupedTimestamp)
**from** | [**GroupedTimestamp**](GroupedTimestamp)
**between** | **boolean**
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)
**conversations** | [**FlattenedConversations**](FlattenedConversations)

## Example

```typescript
import { FlattenedRange } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedRange = {
    "schema": null,
    "id": null,
    "score": null,
    "created": null,
    "updated": null,
    "to": null,
    "from": null,
    "between": null,
    "summaries": null,
    "conversations": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedRange
console.log(exampleParsed)
```


