---
title: SeededFormat | TypeScript SDK
---


# SeededFormat

This is seeded data that will be come a format.  We will throw an Error if, 1) file and fragment are both defined, 2) file and fragment are both null.  if this is being used within the /assets/create endpoint or the /\{application\}/create endpoint, we will not take the classificaiton into account, as it is only used in the syntax highlighting related endpoints.That being said if you do want to override your classification, please look at the metadata within the file or the fragment.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**file** | [**SeededFile**](SeededFile)
**fragment** | [**SeededFragment**](SeededFragment)
**classification** | [**SeededClassification**](SeededClassification)

## Example

```typescript
import { SeededFormat } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededFormat = {
    "schema": null,
    "file": null,
    "fragment": null,
    "classification": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededFormat
console.log(exampleParsed)
```


