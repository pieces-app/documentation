
# SeededScoreIncrement Model

This is the body for a respective scores increment,  This will enable us to know what material we want to increment, all of which are optional, if it is defined we will attempt to increment the material.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | [**SeededScore**](SeededScore)
**assets** | [**SeededScore**](SeededScore)
**website** | [**SeededScore**](SeededScore)
**websites** | [**SeededScore**](SeededScore)
**anchor** | [**SeededScore**](SeededScore)
**anchors** | [**SeededScore**](SeededScore)
**anchorPoint** | [**SeededScore**](SeededScore)
**anchorPoints** | [**SeededScore**](SeededScore)
**annotation** | [**SeededScore**](SeededScore)
**annotations** | [**SeededScore**](SeededScore)
**conversation** | [**SeededScore**](SeededScore)
**conversations** | [**SeededScore**](SeededScore)
**conversationMessage** | [**SeededScore**](SeededScore)
**conversationMessages** | [**SeededScore**](SeededScore)
**share** | [**SeededScore**](SeededScore)
**shares** | [**SeededScore**](SeededScore)
**sensitive** | [**SeededScore**](SeededScore)
**sensitives** | [**SeededScore**](SeededScore)
**hint** | [**SeededScore**](SeededScore)
**hints** | [**SeededScore**](SeededScore)
**person** | [**SeededScore**](SeededScore)
**persons** | [**SeededScore**](SeededScore)
**tag** | [**SeededScore**](SeededScore)
**tags** | [**SeededScore**](SeededScore)
**workstreamSummary** | [**SeededScore**](SeededScore)
**workstreamSummaries** | [**SeededScore**](SeededScore)
**workstreamEvents** | [**SeededScore**](SeededScore)
**workstreamEvent** | [**SeededScore**](SeededScore)
**ranges** | [**SeededScore**](SeededScore)
**range** | [**SeededScore**](SeededScore)

## Example Model

```typescript
import { SeededScoreIncrement } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededScoreIncrement = {
    "schema": null,
    "asset": null,
    "assets": null,
    "website": null,
    "websites": null,
    "anchor": null,
    "anchors": null,
    "anchorPoint": null,
    "anchorPoints": null,
    "annotation": null,
    "annotations": null,
    "conversation": null,
    "conversations": null,
    "conversationMessage": null,
    "conversationMessages": null,
    "share": null,
    "shares": null,
    "sensitive": null,
    "sensitives": null,
    "hint": null,
    "hints": null,
    "person": null,
    "persons": null,
    "tag": null,
    "tags": null,
    "workstreamSummary": null,
    "workstreamSummaries": null,
    "workstreamEvents": null,
    "workstreamEvent": null,
    "ranges": null,
    "range": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededScoreIncrement
console.log(exampleParsed)
```


