
# FlattenedPersons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedPerson&gt;**](ReferencedPerson)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedPersons } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedPersons = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedPersons
console.log(exampleParsed)
```


