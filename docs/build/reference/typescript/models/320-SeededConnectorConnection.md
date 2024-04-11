
# SeededConnectorConnection Model

A model that is passed to the context API at bootup

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**application** | [**SeededTrackedApplication**](SeededTrackedApplication)

## Example Model

```typescript
import { SeededConnectorConnection } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededConnectorConnection = {
    "schema": null,
    "application": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorConnection
console.log(exampleParsed)
```


