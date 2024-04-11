
# TrackedApplicationUpdate Model

This is a model used to track when an Application is Updated

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**current** | [**TrackedApplication**](TrackedApplication)
**previous** | [**TrackedApplication**](TrackedApplication)
**user** | [**TrackedUserProfile**](TrackedUserProfile)

## Example Model

```typescript
import { TrackedApplicationUpdate } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedApplicationUpdate = {
    "schema": null,
    "current": null,
    "previous": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplicationUpdate
console.log(exampleParsed)
```


