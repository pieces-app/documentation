---
title: TextMatch | TypeScript SDK
---


# TextMatch

Thext Match currently used for sensitive for scales for people, and anything related to text matching.  group: is the entire match subgroup is the inner match within the group.(optional)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**group** | [**TextLocation**](TextLocation)
**subgroup** | [**TextLocation**](TextLocation)

## Example

```typescript
import { TextMatch } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TextMatch = {
    "schema": null,
    "group": null,
    "subgroup": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TextMatch
console.log(exampleParsed)
```


