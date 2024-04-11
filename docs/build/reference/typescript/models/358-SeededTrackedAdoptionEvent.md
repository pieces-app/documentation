
# SeededTrackedAdoptionEvent Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifierDescriptionPair** | [**AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs**](AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs)

## Example Model

```typescript
import { SeededTrackedAdoptionEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTrackedAdoptionEvent = {
    "schema": null,
    "identifierDescriptionPair": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedAdoptionEvent
console.log(exampleParsed)
```


