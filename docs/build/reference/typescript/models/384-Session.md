---
title: Session | TypeScript SDK
---


# Session

This is a specific model that will let us know at what time this user was using the application.

## Properties

Name | Type
------------ | -------------
**id** | **string**
**opened** | [**GroupedTimestamp**](GroupedTimestamp)
**closed** | [**GroupedTimestamp**](GroupedTimestamp)

## Example

```typescript
import { Session } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Session = {
    "id": null,
    "opened": null,
    "closed": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Session
console.log(exampleParsed)
```


