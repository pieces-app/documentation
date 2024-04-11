
# Auth0UserBetaStatus Model

Note: continuous: this means that from this moment in time, the user is continuously opted into beta  otherwise we will use the from/to values provided.  Note: in order to opt out of vision, you will just end their beta w/ the updated with a to property that is effectively right now in time.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**vision** | [**AnonymousTemporalRange**](AnonymousTemporalRange)

## Example Model

```typescript
import { Auth0UserBetaStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0UserBetaStatus = {
    "schema": null,
    "vision": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0UserBetaStatus
console.log(exampleParsed)
```


