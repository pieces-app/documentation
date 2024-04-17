---
title: DiscoveredRelatedTags | TypeScript SDK
---


# DiscoveredRelatedTags


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | **string**
**iterable** | [**Array&lt;DiscoveredRelatedTag&gt;**](DiscoveredRelatedTag)

## Example

```typescript
import { DiscoveredRelatedTags } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DiscoveredRelatedTags = {
    "schema": null,
    "application": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredRelatedTags
console.log(exampleParsed)
```


