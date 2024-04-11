
# SeededConnectorAsset

A generic model to use with the Connector API that requires little to no additional information about the current application.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata)
**format** | [**SeededFormat**](SeededFormat)

## Example

```typescript
import { SeededConnectorAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededConnectorAsset = {
    "schema": null,
    "metadata": null,
    "format": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConnectorAsset
console.log(exampleParsed)
```


