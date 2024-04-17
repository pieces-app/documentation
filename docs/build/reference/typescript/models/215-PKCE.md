---
title: PKCE | TypeScript SDK
---


# PKCE

An object representing all of the properties involved in a PKCE Authentication Flow

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**result** | [**ResultedPKCE**](ResultedPKCE)
**challenge** | [**ChallengedPKCE**](ChallengedPKCE)
**revocation** | [**RevokedPKCE**](RevokedPKCE)
**seed** | [**SeededPKCE**](SeededPKCE)
**token** | [**TokenizedPKCE**](TokenizedPKCE)
**auth0** | [**Auth0**](Auth0)

## Example

```typescript
import { PKCE } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: PKCE = {
    "schema": null,
    "result": null,
    "challenge": null,
    "revocation": null,
    "seed": null,
    "token": null,
    "auth0": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PKCE
console.log(exampleParsed)
```


