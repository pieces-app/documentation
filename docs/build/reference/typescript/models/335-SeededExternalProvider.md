---
title: SeededExternalProvider | TypeScript SDK
---


# SeededExternalProvider

This is the minimum information needed to connect an additional provider.

## Properties

Name | Type
------------ | -------------
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum)

## Example

```typescript
import { SeededExternalProvider } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededExternalProvider = {
    "type": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededExternalProvider
console.log(exampleParsed)
```


