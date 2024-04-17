---
title: AllocationCloud | TypeScript SDK
---


# AllocationCloud

update && version: will be present only if your cloud was successfully spun up && running.  updated: is the last time this was updated.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**user** | **string**
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls)
**status** | [**AllocationCloudStatus**](AllocationCloudStatus)
**project** | **string**
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**version** | **string**
**region** | **string**

## Example

```typescript
import { AllocationCloud } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AllocationCloud = {
    "schema": null,
    "id": null,
    "user": null,
    "urls": null,
    "status": null,
    "project": null,
    "updated": null,
    "version": null,
    "region": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloud
console.log(exampleParsed)
```


