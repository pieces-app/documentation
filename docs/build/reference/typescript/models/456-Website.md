
# Website Model

This is a specific model for related websites to an asset.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**assets** | [**FlattenedAssets**](FlattenedAssets)
**url** | **string**
**name** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum)
**interactions** | **number**
**persons** | [**FlattenedPersons**](FlattenedPersons)
**conversations** | [**FlattenedConversations**](FlattenedConversations)
**score** | [**Score**](Score)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)

## Example Model

```typescript
import { Website } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Website = {
    "schema": null,
    "id": null,
    "assets": null,
    "url": null,
    "name": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mechanisms": null,
    "interactions": null,
    "persons": null,
    "conversations": null,
    "score": null,
    "summaries": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Website
console.log(exampleParsed)
```


