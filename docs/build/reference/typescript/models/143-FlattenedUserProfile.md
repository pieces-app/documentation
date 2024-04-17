---
title: FlattenedUserProfile | TypeScript SDK
---


# FlattenedUserProfile

This is a FlattenedUserProfile that includes information that is not sensative in relation to a user.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**email** | **string**
**name** | **string**
**username** | **string**
**picture** | **string**
**vanityname** | **string**

## Example

```typescript
import { FlattenedUserProfile } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedUserProfile = {
    "schema": null,
    "id": null,
    "email": null,
    "name": null,
    "username": null,
    "picture": null,
    "vanityname": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedUserProfile
console.log(exampleParsed)
```


