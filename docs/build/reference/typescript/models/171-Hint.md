
# Hint Model

This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**type** | [**HintTypeEnum**](HintTypeEnum)
**text** | **string**
**model** | [**ReferencedModel**](ReferencedModel)
**score** | [**Score**](Score)

## Example Model

```typescript
import { Hint } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Hint = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mechanism": null,
    "asset": null,
    "type": null,
    "text": null,
    "model": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Hint
console.log(exampleParsed)
```


