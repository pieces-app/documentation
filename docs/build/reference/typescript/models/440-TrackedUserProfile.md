
# TrackedUserProfile

A user that will be passed along with each analytics event

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**username** | **string**
**email** | **string**
**granularity** | **string**

## Example

```typescript
import { TrackedUserProfile } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedUserProfile = {
    "schema": null,
    "id": null,
    "username": null,
    "email": null,
    "granularity": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedUserProfile
console.log(exampleParsed)
```


