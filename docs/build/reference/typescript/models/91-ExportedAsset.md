
# ExportedAsset Model

This is a model for a minimum exported version of an asset.

## Properties Model

Name | Type
------------ | -------------
**name** | **string**
**description** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**raw** | [**FileFormat**](FileFormat)

## Example Model

```typescript
import { ExportedAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: ExportedAsset = {
    "name": null,
    "description": null,
    "created": null,
    "raw": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedAsset
console.log(exampleParsed)
```


