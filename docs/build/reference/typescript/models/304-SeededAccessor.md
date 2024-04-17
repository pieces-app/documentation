
# SeededAccessor

This is a pre-created accessor that simply takes an os id and an optional user(flattened)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**os** | **string**
**user** | [**FlattenedUserProfile**](FlattenedUserProfile)
**share** | **string**

## Example

```typescript
import { SeededAccessor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededAccessor = {
    "schema": null,
    "os": null,
    "user": null,
    "share": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededAccessor
console.log(exampleParsed)
```


