
# SeededPKCE

A model that initialized a PKCE Authentication Flow.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**responseType** | **string**
**state** | **string**
**nonce** | **string**
**redirectUri** | **string**
**codeChallenge** | **string**
**codeChallengeMethod** | **string**
**domain** | **string**
**audience** | **string**
**screenHint** | **string**
**prompt** | **string**
**organization** | **string**
**invitation** | **string**
**scope** | **Array&lt;string&gt;**
**clientId** | **string**
**aDDITIONALPARAMETERS** | [**SeededPKCEADDITIONALPARAMETERS**](SeededPKCEADDITIONALPARAMETERS)
**responseMode** | **string**

## Example

```typescript
import { SeededPKCE } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededPKCE = {
    "schema": null,
    "responseType": code,
    "state": null,
    "nonce": null,
    "redirectUri": null,
    "codeChallenge": null,
    "codeChallengeMethod": null,
    "domain": null,
    "audience": null,
    "screenHint": null,
    "prompt": null,
    "organization": null,
    "invitation": null,
    "scope": null,
    "clientId": 9sW4Pa1LEjX67l6VO14u0207NLYeXnu1,
    "aDDITIONALPARAMETERS": null,
    "responseMode": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededPKCE
console.log(exampleParsed)
```


