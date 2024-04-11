
# TrackedFormatEvent

This is a model that represents a generic event that we may want to track in relation to a format, for example beamed, copied, downloaded, and view. ** Note: This is the model that will get returned by our api, and is. Representative of a full TrackedFormat event. **

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**format** | [**TrackedFormat**](TrackedFormat)
**identifierDescriptionPair** | [**TrackedFormatEventIdentifierDescriptionPairs**](TrackedFormatEventIdentifierDescriptionPairs)
**metadata** | [**TrackedFormatEventMetadata**](TrackedFormatEventMetadata)

## Example

```typescript
import { TrackedFormatEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedFormatEvent = {
    "schema": null,
    "format": null,
    "identifierDescriptionPair": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormatEvent
console.log(exampleParsed)
```


