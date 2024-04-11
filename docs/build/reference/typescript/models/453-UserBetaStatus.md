
# UserBetaStatus Model

This is used to either grant or remove a specific provider betastatus

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**auth0** | [**Auth0UserBetaStatus**](Auth0UserBetaStatus)
**user** | **string**

## Example Model

```typescript
import { UserBetaStatus } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: UserBetaStatus = {
    "schema": null,
    "auth0": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UserBetaStatus
console.log(exampleParsed)
```


