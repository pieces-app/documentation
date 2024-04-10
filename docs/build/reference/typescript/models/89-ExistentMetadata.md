
# ExistentMetadata Model

This is a shared output model for all the exists endpoints: /tags/exists : value here is the tag that you want to see if it exists. /websites/exists: value here is the url you want to see if it exists

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**value** | **string**

## Example Model

```typescript
import { ExistentMetadata } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExistentMetadata = {
    "schema": null,
    "value": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExistentMetadata
console.log(exampleParsed)
```


