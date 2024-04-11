
# Context Model

A Context that is returned from almost all calls to the ContextAPI

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**os** | **string**
**application** | [**Application**](Application)
**health** | [**Health**](Health)
**user** | [**UserProfile**](UserProfile)

## Example Model

```typescript
import { Context } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Context = {
    "schema": null,
    "os": null,
    "application": null,
    "health": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Context
console.log(exampleParsed)
```


