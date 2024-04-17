
# OSPermissions

This will return the permission of this specific operating system w/ relation to given features.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**processing** | [**OSProcessingPermissions**](OSProcessingPermissions)

## Example

```typescript
import { OSPermissions } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OSPermissions = {
    "schema": null,
    "processing": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSPermissions
console.log(exampleParsed)
```


