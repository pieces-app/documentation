
# OpenAIModelsListInput Model

This is the input model for the /open_ai/models/list endpoint.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**user** | **string**

## Example Model

```typescript
import { OpenAIModelsListInput } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: OpenAIModelsListInput = {
    "schema": null,
    "user": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OpenAIModelsListInput
console.log(exampleParsed)
```


