---
title: Backup | TypeScript SDK
---


# Backup

This is a cloud Backup. This is specific metadata needed inorder to retrieve a Backup.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**version** | **string**
**timestamp** | **string**
**bytes** | **number**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**deviceName** | **string**
**platform** | [**PlatformEnum**](PlatformEnum)

## Example

```typescript
import { Backup } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Backup = {
    "schema": null,
    "id": null,
    "version": null,
    "timestamp": null,
    "bytes": null,
    "created": null,
    "deviceName": null,
    "platform": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Backup
console.log(exampleParsed)
```


