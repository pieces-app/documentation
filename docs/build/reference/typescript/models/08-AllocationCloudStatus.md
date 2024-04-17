---
title: AllocationCloudStatus | TypeScript SDK
---


# AllocationCloudStatus


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**cloud** | [**AllocationStatusEnum**](AllocationStatusEnum)

## Example

```typescript
import { AllocationCloudStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AllocationCloudStatus = {
    "schema": null,
    "cloud": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AllocationCloudStatus
console.log(exampleParsed)
```


