
# TrackedAssetEventCreationMetadataFile

If an asset was created from a file attachment

## Properties

Name | Type
------------ | -------------
**keyboard** | **boolean**
**dragAndDrop** | **boolean**
**interaction** | **boolean**

## Example

```typescript
import { TrackedAssetEventCreationMetadataFile } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetEventCreationMetadataFile = {
    "keyboard": null,
    "dragAndDrop": null,
    "interaction": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventCreationMetadataFile
console.log(exampleParsed)
```


