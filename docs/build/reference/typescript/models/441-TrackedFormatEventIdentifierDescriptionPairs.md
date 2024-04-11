
# TrackedFormatEventIdentifierDescriptionPairs Model

This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**formatCreated** | **string**
**formatCopied** | **string**
**formatPartiallyCopied** | **string**
**formatDownloaded** | **string**
**formatDeleted** | **string**
**formatGenericClassificationUpdated** | **string**
**formatSpecificClassificationUpdated** | **string**
**formatUpdated** | **string**
**formatInserted** | **string**
**formatValueEdited** | **string**

## Example Model

```typescript
import { TrackedFormatEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedFormatEventIdentifierDescriptionPairs = {
    "schema": null,
    "formatCreated": null,
    "formatCopied": null,
    "formatPartiallyCopied": null,
    "formatDownloaded": null,
    "formatDeleted": null,
    "formatGenericClassificationUpdated": null,
    "formatSpecificClassificationUpdated": null,
    "formatUpdated": null,
    "formatInserted": null,
    "formatValueEdited": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedFormatEventIdentifierDescriptionPairs
console.log(exampleParsed)
```


