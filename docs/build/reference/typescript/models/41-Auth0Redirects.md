
# Auth0Redirects

The redirect URI for you Auth 0 Service

## Properties

Name | Type
------------ | -------------
**authenticated** | **string**
**unauthenticated** | **string**

## Example

```typescript
import { Auth0Redirects } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Auth0Redirects = {
    "authenticated": null,
    "unauthenticated": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Auth0Redirects
console.log(exampleParsed)
```


