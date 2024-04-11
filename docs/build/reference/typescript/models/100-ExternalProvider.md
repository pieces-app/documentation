
# ExternalProvider Model

I know that profileData and user_id have differeing casing but they are done because they map to Auth0\'s projeecties.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum)
**userId** | **string**
**accessToken** | **string**
**expiresIn** | **number**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**profileData** | [**ExternalProviderProfileData**](ExternalProviderProfileData)
**connection** | **string**
**isSocial** | **boolean**

## Example Model

```typescript
import { ExternalProvider } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExternalProvider = {
    "schema": null,
    "type": null,
    "userId": null,
    "accessToken": null,
    "expiresIn": null,
    "created": null,
    "updated": null,
    "profileData": null,
    "connection": null,
    "isSocial": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExternalProvider
console.log(exampleParsed)
```


