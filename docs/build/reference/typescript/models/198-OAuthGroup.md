
# OAuthGroup

A model to group all of the properties associated with OAuthGroup

## Properties

Name | Type
------------ | -------------
**token** | [**OAuthToken**](OAuthToken)
**account** | [**OAuthAccount**](OAuthAccount)

## Example

```typescript
import { OAuthGroup } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OAuthGroup = {
    "token": null,
    "account": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OAuthGroup
console.log(exampleParsed)
```


