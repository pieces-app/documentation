
# FlattenedAnchorPoints


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedAnchorPoint&gt;**](ReferencedAnchorPoint)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedAnchorPoints } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: FlattenedAnchorPoints = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAnchorPoints
console.log(exampleParsed)
```

