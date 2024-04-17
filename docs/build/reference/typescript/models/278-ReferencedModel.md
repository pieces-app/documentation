
# ReferencedModel

*****NOTE:***** This is the basic referencedModel, for Now since we dont have a FlattenedModel, im going to simply not include the reference, because I do NOT want to attach a Model here (would cause breaking changes if we switched from a Model -> a flattenedModel). and (2) we are under going Model changes to the Model, so would cause issues.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**

## Example

```typescript
import { ReferencedModel } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ReferencedModel = {
    "schema": null,
    "id": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedModel
console.log(exampleParsed)
```


