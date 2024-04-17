
# Asset

An Asset Model representing data extracted from an Application connecting a group of data containing one or more Formats.  Below formats, preview, and original CAN to be pollinated (DAG Unsafe) because it is a root node and it\'s child leaf nodes will prevent cycles agressively.

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
**formats** | [**Formats**](Formats)
**preview** | [**Preview**](Preview)
**original** | [**ReferencedFormat**](ReferencedFormat)
**shares** | [**Shares**](Shares)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**websites** | [**Websites**](Websites)
**interacted** | [**GroupedTimestamp**](GroupedTimestamp)
**tags** | [**Tags**](Tags)
**sensitives** | [**Sensitives**](Sensitives)
**persons** | [**Persons**](Persons)
**curated** | **boolean**
**discovered** | **boolean**
**activities** | [**Activities**](Activities)
**score** | [**Score**](Score)
**favorited** | **boolean**
**pseudo** | **boolean**
**annotations** | [**Annotations**](Annotations)
**hints** | [**Hints**](Hints)
**anchors** | [**Anchors**](Anchors)
**conversations** | [**Conversations**](Conversations)
**summaries** | [**WorkstreamSummaries**](WorkstreamSummaries)
**demo** | **boolean**

## Example

```typescript
import { Asset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Asset = {
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
    "original": null,
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
    "summaries": null,
    "demo": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Asset
console.log(exampleParsed)
```


