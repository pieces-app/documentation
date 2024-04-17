---
title: OrderedMetrics | TypeScript SDK
---


# OrderedMetrics

This is a returnable for the metrics/formats/ordered

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**ordered** | **Array&lt;string&gt;**

## Example

```typescript
import { OrderedMetrics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OrderedMetrics = {
    "schema": null,
    "ordered": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OrderedMetrics
console.log(exampleParsed)
```


