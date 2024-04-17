---
title: SeededRangeConversationGroundingTemporalAssociation | TypeScript SDK
---


# SeededRangeConversationGroundingTemporalAssociation


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**workstream** | **boolean**

## Example

```typescript
import { SeededRangeConversationGroundingTemporalAssociation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededRangeConversationGroundingTemporalAssociation = {
    "schema": null,
    "workstream": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededRangeConversationGroundingTemporalAssociation
console.log(exampleParsed)
```


