
# TrackedApplicationInstall

A model that allows for us to specifically track Application Installs & Related Data

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | [**TrackedApplication**](TrackedApplication)
**user** | [**TrackedUserProfile**](TrackedUserProfile)

## Example

```typescript
import { TrackedApplicationInstall } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TrackedApplicationInstall = {
    "schema": null,
    "application": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedApplicationInstall
console.log(exampleParsed)
```


