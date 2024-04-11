
# FlattenedAnchor Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**type** | [**AnchorTypeEnum**](AnchorTypeEnum)
**watch** | **boolean**
**points** | [**FlattenedAnchorPoints**](FlattenedAnchorPoints)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**name** | **string**
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**score** | [**Score**](Score)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)

## Example Model

```typescript
import { FlattenedAnchor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAnchor = {
    "schema": null,
    "id": null,
    "type": null,
    "watch": null,
    "points": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "assets": null,
    "name": null,
    "annotations": null,
    "conversations": null,
    "score": null,
    "summaries": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnchor
console.log(exampleParsed)
```


