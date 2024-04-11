
# OSProcessingPermissions

These are the permissions relating to the vision models.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**vision** | **boolean**
**accessibility** | **boolean**

## Example

```typescript
import { OSProcessingPermissions } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OSProcessingPermissions = {
    "schema": null,
    "vision": null,
    "accessibility": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OSProcessingPermissions
console.log(exampleParsed)
```


