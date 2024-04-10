
# AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**adoptionInstall** | **string**
**adoptionUninstall** | **string**

## Example Model

```typescript
import { AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs = {
    "schema": null,
    "adoptionInstall": null,
    "adoptionUninstall": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs
console.log(exampleParsed)
```


