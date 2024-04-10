
# FileMetadata Model

This is a model for metadata of a file!

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**size** | **number**

## Example Model

```typescript
import { FileMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FileMetadata = {
    "schema": null,
    "name": null,
    "ext": null,
    "size": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileMetadata
console.log(exampleParsed)
```


