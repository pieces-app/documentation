
# GraphicalImageStatistics Model


## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**descriptive** | [**GraphicalImageDescriptiveStatistics**](GraphicalImageDescriptiveStatistics)

## Example Model

```typescript
import { GraphicalImageStatistics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: GraphicalImageStatistics = {
    "schema": null,
    "descriptive": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalImageStatistics
console.log(exampleParsed)
```


