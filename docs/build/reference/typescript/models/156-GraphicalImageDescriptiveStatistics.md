
# GraphicalImageDescriptiveStatistics Model

Model for collecting descriptive statistics of images uploaded to Pieces

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**width** | **string**
**height** | **string**
**channels** | **string**
**asset** | **string**
**user** | **string**
**created** | **string**
**os** | **string**

## Example Model

```typescript
import { GraphicalImageDescriptiveStatistics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: GraphicalImageDescriptiveStatistics = {
    "schema": null,
    "width": null,
    "height": null,
    "channels": null,
    "asset": null,
    "user": null,
    "created": null,
    "os": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GraphicalImageDescriptiveStatistics
console.log(exampleParsed)
```


