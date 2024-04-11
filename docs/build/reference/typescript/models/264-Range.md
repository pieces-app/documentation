
# Range Model

This is an identified Range, this is ONLY needed when using plural rangedTimestamps, in order to ensure granularity(add/modify/delete)

## Properties Model

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

## Example Model

```typescript
import { Range } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Range = {
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
const exampleParsed = JSON.parse(exampleJSON) as Range
console.log(exampleParsed)
```


