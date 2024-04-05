
# BackupStreamedProgress

This is a specific model to the /backups/create/streamed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**status** | [**ModelDownloadProgressStatusEnum**](ModelDownloadProgressStatusEnum) |  | [optional] [default to undefined]
**percentage** | **number** | Optionally if the download is in progress you will recieve a download percent(from 0-100). | [optional] [default to undefined]
**backup** | [**Backup**](Backup) |  | [optional] [default to undefined]

## Example

```typescript
import { BackupStreamedProgress } from '';

// TODO: Update the object below with actual values
const example: BackupStreamedProgress = {
    "schema": null, // 
    "status": null, // 
    "percentage": null, // Optionally if the download is in progress you will recieve a download percent(from 0-100).
    "backup": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BackupStreamedProgress;
console.log(exampleParsed);
```




