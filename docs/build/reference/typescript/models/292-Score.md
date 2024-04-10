
# Score

This is use as the score for an asset.  Manual: will be the raw sum of the asset activity events ranks with mechanismEnum == manual Automatic: will be the raw sum of the asset activity events ranks with mechanismEnum == automatic

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**manual** | **number**
**automatic** | **number**
**priority** | **number**
**reuse** | **number**
**update** | **number**
**reference** | **number**

## Example

```typescript
import { Score } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: Score = {
    "schema": null,
    "manual": null,
    "automatic": null,
    "priority": null,
    "reuse": null,
    "update": null,
    "reference": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Score
console.log(exampleParsed)
```


