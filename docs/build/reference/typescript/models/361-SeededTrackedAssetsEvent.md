
# SeededTrackedAssetsEvent Model

An seeded event model that can occur at the assets level i.e. search 

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifierDescriptionPair** | [**TrackedAssetsEventIdentifierDescriptionPairs**](TrackedAssetsEventIdentifierDescriptionPairs)
**metadata** | [**SeededTrackedAssetsEventMetadata**](SeededTrackedAssetsEventMetadata)

## Example Model

```typescript
import { SeededTrackedAssetsEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTrackedAssetsEvent = {
    "schema": null,
    "identifierDescriptionPair": null,
    "metadata": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAssetsEvent
console.log(exampleParsed)
```


