
# ReferencedDistribution



## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedDistribution**](FlattenedDistribution)

## Example

```typescript
import { ReferencedDistribution } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedDistribution = {
    "schema": null,
    "id": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedDistribution
console.log(exampleParsed)
```


