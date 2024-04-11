
# QGPTPersonsRelatedInput Model

This is used for /qgpt/persons/related.  will accept a seed, or conversation all optionally. 

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**seed** | [**Seed**](Seed)
**conversation** | [**QGPTConversation**](QGPTConversation)
**application** | **string**
**model** | **string**

## Example Model

```typescript
import { QGPTPersonsRelatedInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: QGPTPersonsRelatedInput = {
    "schema": null,
    "seed": null,
    "conversation": null,
    "application": null,
    "model": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QGPTPersonsRelatedInput
console.log(exampleParsed)
```


