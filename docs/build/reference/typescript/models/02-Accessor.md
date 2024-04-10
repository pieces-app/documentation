
# Accessor

This is used to determine who has accessed a share. and how many times.  The user here is the user that accessed this Piece.(optional) if undefined then this user was not logged in yet.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**os** | **string**
**share** | **string**
**count** | **number**
**user** | [**FlattenedUserProfile**](FlattenedUserProfile)

## Example

```typescript
import { Accessor } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Accessor = {
    "schema": null,
    "id": null,
    "os": null,
    "share": null,
    "count": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Accessor
console.log(exampleParsed)
```


