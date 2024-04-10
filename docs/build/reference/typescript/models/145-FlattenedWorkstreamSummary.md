
# FlattenedWorkstreamSummary Model

This is a DAG-Safe minimal representation of a workstream summary

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**score** | [**Score**](Score)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents)
**name** | **string**
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**ranges** | [**FlattenedRanges**](FlattenedRanges)
**model** | [**Model**](Model)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**anchors** | [**FlattenedAnchors**](FlattenedAnchors)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**persons** | [**FlattenedPersons**](FlattenedPersons)
**applications** | [**Applications**](Applications)

## Example Model

```typescript
import { FlattenedWorkstreamSummary } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedWorkstreamSummary = {
    "schema": null,
    "id": null,
    "score": null,
    "created": null,
    "updated": null,
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedWorkstreamSummary
console.log(exampleParsed)
```


