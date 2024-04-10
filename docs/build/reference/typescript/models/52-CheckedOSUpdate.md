
# CheckedOSUpdate Model

This is the returnable for /os/update/check

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**status** | [**UpdatingStatusEnum**](UpdatingStatusEnum)

## Example Model

```typescript
import { CheckedOSUpdate } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: CheckedOSUpdate = {
    "schema": null,
    "status": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CheckedOSUpdate
console.log(exampleParsed)
```


