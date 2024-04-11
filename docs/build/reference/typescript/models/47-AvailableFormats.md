
# AvailableFormats Model

This is a specific model here used within the SeededAsset that enables us to return all the available formats on a specific seed that was passed as an input within the \'/assets/draft\' endpoint

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Classification&gt;**](Classification)

## Example Model

```typescript
import { AvailableFormats } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AvailableFormats = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AvailableFormats
console.log(exampleParsed)
```


