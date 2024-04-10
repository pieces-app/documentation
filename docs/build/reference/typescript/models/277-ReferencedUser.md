
# ReferencedUser

A object to reference a user\'s ID and optionally a FlattenedUserProfile Instance 

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedUserProfile**](FlattenedUserProfile)

## Example

```typescript
import { ReferencedUser } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedUser = {
    "schema": null,
    "id": 497f6eca-6276-4993-bfeb-53cbbbba6f08,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedUser
console.log(exampleParsed)
```


