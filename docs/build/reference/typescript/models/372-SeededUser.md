
# SeededUser



## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**emails** | **Array&lt;string&gt;**

## Example

```typescript
import { SeededUser } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededUser = {
    "schema": null,
    "emails": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededUser
console.log(exampleParsed)
```


