
# Activities Model

This is the plural of activity

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Activity&gt;**](Activity)

## Example Model

```typescript
import { Activities } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Activities = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Activities
console.log(exampleParsed)
```


