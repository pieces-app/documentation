---
title: FlattenedAsset | TypeScript SDK
---


# FlattenedAsset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAsset prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.preview is Type String, and FlattenedFormat.original is Type String

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**name** | **string**
**creator** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**formats** | [**FlattenedFormats**](FlattenedFormats)
**preview** | [**FlattenedPreview**](FlattenedPreview)
**original** | **string**
**shares** | [**FlattenedShares**](FlattenedShares)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**interacted** | [**GroupedTimestamp**](GroupedTimestamp)
**tags** | [**FlattenedTags**](FlattenedTags)
**sensitives** | [**FlattenedSensitives**](FlattenedSensitives)
**persons** | [**FlattenedPersons**](FlattenedPersons)
**curated** | **boolean**
**discovered** | **boolean**
**activities** | [**FlattenedActivities**](FlattenedActivities)
**score** | [**Score**](Score)
**favorited** | **boolean**
**pseudo** | **boolean**
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**hints** | [**FlattenedHints**](FlattenedHints)
**anchors** | [**FlattenedAnchors**](FlattenedAnchors)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**demo** | **boolean**
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)

## Example

```typescript
import { FlattenedAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAsset = {
    "schema": null,
    "id": 2254f2c8-5797-40e8-ac56-41166dc0e159,
    "name": null,
    "creator": 497f6eca-6276-4993-bfeb-53cbbbba6f08,
    "created": null,
    "updated": null,
    "synced": null,
    "deleted": null,
    "formats": null,
    "preview": null,
    "original": 0872ccbf-1d8f-4f46-9028-469794d72761,
    "shares": null,
    "mechanism": null,
    "websites": null,
    "interacted": null,
    "tags": null,
    "sensitives": null,
    "persons": null,
    "curated": null,
    "discovered": null,
    "activities": null,
    "score": null,
    "favorited": null,
    "pseudo": null,
    "annotations": null,
    "hints": null,
    "anchors": null,
    "conversations": null,
    "demo": null,
    "summaries": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAsset
console.log(exampleParsed)
```


