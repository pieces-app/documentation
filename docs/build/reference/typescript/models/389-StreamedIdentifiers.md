---
title: StreamedIdentifiers | TypeScript SDK
---


# StreamedIdentifiers

This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class. && expand the StreamedIdentifier class.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;StreamedIdentifier&gt;**](StreamedIdentifier)

## Example

```typescript
import { StreamedIdentifiers } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: StreamedIdentifiers = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StreamedIdentifiers
console.log(exampleParsed)
```


