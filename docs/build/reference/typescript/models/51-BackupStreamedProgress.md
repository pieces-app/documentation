---
title: BackupStreamedProgress | TypeScript SDK
---


# BackupStreamedProgress

This is a specific model to the /backups/create/streamed.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum)
**percentage** | **number**
**backup** | [**Backup**](Backup)

## Example

```typescript
import { BackupStreamedProgress } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: BackupStreamedProgress = {
    "schema": null,
    "status": null,
    "percentage": null,
    "backup": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupStreamedProgress
console.log(exampleParsed)
```


