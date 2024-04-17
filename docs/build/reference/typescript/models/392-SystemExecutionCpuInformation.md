---
title: SystemExecutionCpuInformation | TypeScript SDK
---


# SystemExecutionCpuInformation


## Properties

Name | Type
------------ | -------------
**count** | **number**
**brand** | **string**
**frequency** | **number**

## Example

```typescript
import { SystemExecutionCpuInformation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SystemExecutionCpuInformation = {
    "count": null,
    "brand": null,
    "frequency": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SystemExecutionCpuInformation
console.log(exampleParsed)
```


