---
title: DiscoveredSensitives | TypeScript SDK
---


# DiscoveredSensitives



## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;DiscoveredSensitive&gt;**](DiscoveredSensitive)
**application** | **string**

## Example

```typescript
import { DiscoveredSensitives } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: DiscoveredSensitives = {
    "schema": null,
    "iterable": null,
    "application": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredSensitives
console.log(exampleParsed)
```


