---
title: TrackedApplicationUpdate | TypeScript SDK
---


# TrackedApplicationUpdate

This is a model used to track when an Application is Updated

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**current** | [**Application**](Application)
**previous** | [**Application**](Application)
**user** | [**TrackedUserProfile**](TrackedUserProfile)

## Example

```typescript
import { TrackedApplicationUpdate } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedApplicationUpdate = {
    "schema": null,
    "current": null,
    "previous": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplicationUpdate
console.log(exampleParsed)
```


