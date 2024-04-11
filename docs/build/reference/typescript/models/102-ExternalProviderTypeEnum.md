
# ExternalProviderTypeEnum Model

This is an enum to describe the provider used to authenticate a user.  IMPORTANT NOT to modify tha values here unless they are explicitly mapped with auth0\'s provider values(example within cloud server)  \'waad\': (windows azure active directory)

## Properties Model

Name | Type
------------ | -------------

## Example Model

```typescript
import { ExternalProviderTypeEnum } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExternalProviderTypeEnum = {
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalProviderTypeEnum
console.log(exampleParsed)
```


