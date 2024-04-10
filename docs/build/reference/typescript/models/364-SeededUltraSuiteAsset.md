
# SeededUltraSuiteAsset Model

A SeededUEAsset is the minimum data sent from UE required to create an asset within Pieces.  Fragment & file are both optional properties however we will throw an internal error if both fragment and file are passed through or if both are undefined.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**format** | [**SeededFormat**](SeededFormat)
**description** | **string**

## Example Model

```typescript
import { SeededUltraSuiteAsset } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededUltraSuiteAsset = {
    "schema": null,
    "name": null,
    "ext": null,
    "format": null,
    "description": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededUltraSuiteAsset
console.log(exampleParsed)
```


