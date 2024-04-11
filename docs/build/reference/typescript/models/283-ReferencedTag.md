
# ReferencedTag Model

[DAG Safe] version of a Tag Model. 

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedTag**](FlattenedTag)

## Example Model

```typescript
import { ReferencedTag } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedTag = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedTag
console.log(exampleParsed)
```


