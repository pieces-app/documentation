
# ResultedPKCE

A Model To Represent the Code Returned from a PKCE Response

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**code** | **string**
**state** | **string**

## Example

```typescript
import { ResultedPKCE } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ResultedPKCE = {
    "schema": null,
    "code": null,
    "state": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResultedPKCE
console.log(exampleParsed)
```


