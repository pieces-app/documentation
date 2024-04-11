
# Seeds Model

This is a plural model for multiple Seed.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Seed&gt;**](Seed)

## Example Model

```typescript
import { Seeds } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Seeds = {
    "schema": null,
    "iterable": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Seeds
console.log(exampleParsed)
```


