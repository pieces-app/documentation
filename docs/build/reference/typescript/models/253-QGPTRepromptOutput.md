
# QGPTRepromptOutput Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**query** | **string**

## Example Model

```typescript
import { QGPTRepromptOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTRepromptOutput = {
    "schema": null,
    "query": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTRepromptOutput
console.log(exampleParsed)
```


