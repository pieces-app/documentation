
# ReferencedPerson Model

[DAG Safe] version of a Person Model. 

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedPerson**](FlattenedPerson)

## Example Model

```typescript
import { ReferencedPerson } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedPerson = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedPerson
console.log(exampleParsed)
```


