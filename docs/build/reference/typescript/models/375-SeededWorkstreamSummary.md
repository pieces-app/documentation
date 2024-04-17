---
title: SeededWorkstreamSummary | TypeScript SDK
---


# SeededWorkstreamSummary

This is a seeded version of a WorkstreamSummary

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents)
**name** | **string**
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**ranges** | [**FlattenedRanges**](FlattenedRanges)
**model** | [**Model**](Model)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**anchors** | [**FlattenedAnchors**](FlattenedAnchors)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**persons** | [**FlattenedPersons**](FlattenedPersons)
**applications** | [**Applications**](Applications)

## Example

```typescript
import { SeededWorkstreamSummary } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededWorkstreamSummary = {
    "schema": null,
    "events": null,
    "name": null,
    "annotations": null,
    "ranges": null,
    "model": null,
    "websites": null,
    "anchors": null,
    "assets": null,
    "conversations": null,
    "persons": null,
    "applications": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWorkstreamSummary
console.log(exampleParsed)
```


