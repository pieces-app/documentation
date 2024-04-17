---
title: SeededBackup | TypeScript SDK
---


# SeededBackup

This is a precursor to a Backup, for now this will not need to take any properties.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example

```typescript
import { SeededBackup } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededBackup = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededBackup
console.log(exampleParsed)
```


