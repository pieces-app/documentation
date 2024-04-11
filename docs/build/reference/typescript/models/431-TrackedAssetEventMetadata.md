
# TrackedAssetEventMetadata Model


## Properties Model

Name | Type
------------ | -------------
**reclassification** | [**TrackedAssetEventFormatReclassificationMetadata**](TrackedAssetEventFormatReclassificationMetadata)
**creation** | [**TrackedAssetEventCreationMetadata**](TrackedAssetEventCreationMetadata)
**rename** | [**TrackedAssetEventRenameMetadata**](TrackedAssetEventRenameMetadata)
**tag** | [**ReferencedTag**](ReferencedTag)
**website** | [**ReferencedWebsite**](ReferencedWebsite)
**person** | [**ReferencedPerson**](ReferencedPerson)
**sensitive** | [**ReferencedSensitive**](ReferencedSensitive)
**share** | [**ReferencedShare**](ReferencedShare)
**search** | [**TrackedAssetsEventSearchMetadata**](TrackedAssetsEventSearchMetadata)
**annotation** | [**ReferencedAnnotation**](ReferencedAnnotation)
**hint** | [**ReferencedHint**](ReferencedHint)
**anchor** | [**ReferencedAnchor**](ReferencedAnchor)

## Example Model

```typescript
import { TrackedAssetEventMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedAssetEventMetadata = {
    "reclassification": null,
    "creation": null,
    "rename": null,
    "tag": null,
    "website": null,
    "person": null,
    "sensitive": null,
    "share": null,
    "search": null,
    "annotation": null,
    "hint": null,
    "anchor": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventMetadata
console.log(exampleParsed)
```


