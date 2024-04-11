
# TLPCodeSnippetSuggestedInteractions Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**save** | [**TLPCodeFragmentSuggestedSave**](TLPCodeFragmentSuggestedSave)
**reuse** | [**TLPCodeFragmentSuggestedReuse**](TLPCodeFragmentSuggestedReuse)

## Example Model

```typescript
import { TLPCodeSnippetSuggestedInteractions } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeSnippetSuggestedInteractions = {
    "schema": null,
    "save": null,
    "reuse": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetSuggestedInteractions
console.log(exampleParsed)
```


