
# AssetSearchSpace

This is provided search spaces, This is a provided assets, TODO in the future we might want to add seeds.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**identifers** | [**FlattenedAssets**](FlattenedAssets)

## Example

```typescript
import { AssetSearchSpace } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: AssetSearchSpace = {
    "schema": null,
    "identifers": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetSearchSpace
console.log(exampleParsed)
```


