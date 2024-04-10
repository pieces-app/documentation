
# OpenAIModelsListOutput Model

This is the output model for the /open_ai/models/list endpoint.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**models** | [**SeededModels**](SeededModels)

## Example Model

```typescript
import { OpenAIModelsListOutput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OpenAIModelsListOutput = {
    "schema": null,
    "models": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpenAIModelsListOutput
console.log(exampleParsed)
```


