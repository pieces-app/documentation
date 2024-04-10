
# UncheckedOSUpdate Model

This is the input body for /os/update/check, just a placeholder for now.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)

## Example Model

```typescript
import { UncheckedOSUpdate } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: UncheckedOSUpdate = {
    "schema": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UncheckedOSUpdate
console.log(exampleParsed)
```


