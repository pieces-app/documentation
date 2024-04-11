
# ChallengedPKCE Model

A model that Generates A PKCE Challenge Object with the needed requirements.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**state** | **string**
**nonce** | **string**
**challenge** | **string**
**method** | **string**
**verifier** | **string**

## Example Model

```typescript
import { ChallengedPKCE } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ChallengedPKCE = {
    "schema": null,
    "state": null,
    "nonce": null,
    "challenge": null,
    "method": null,
    "verifier": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChallengedPKCE
console.log(exampleParsed)
```


