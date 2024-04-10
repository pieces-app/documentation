
# SeededTrackedKeyboardEvent Model

This is a model that will hold relavent information in relation to a keyboard(including shortcuts) analytics event (usage).

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**description** | **string**
**shortcut** | **Array&lt;number&gt;**
**identifierDescriptionPair** | [**SeededTrackedKeyboardEventIdentifierDescriptionPairs**](SeededTrackedKeyboardEventIdentifierDescriptionPairs)

## Example Model

```typescript
import { SeededTrackedKeyboardEvent } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTrackedKeyboardEvent = {
    "schema": null,
    "description": null,
    "shortcut": null,
    "identifierDescriptionPair": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTrackedKeyboardEvent
console.log(exampleParsed)
```


