
# SeededTag Model

This is the minimum information needed when creating a Tag.  Default we will attach manual to a tag unless otherwise specified for mechanism.  you can optionally add an asset, format, or person uuid to attach this tag directly to it  TODO consider updating these asset,format to referenced Models

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**asset** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**category** | [**TagCategoryEnum**](TagCategoryEnum)
**person** | **string**

## Example Model

```typescript
import { SeededTag } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededTag = {
    "schema": null,
    "text": null,
    "asset": null,
    "mechanism": null,
    "category": null,
    "person": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededTag
console.log(exampleParsed)
```


