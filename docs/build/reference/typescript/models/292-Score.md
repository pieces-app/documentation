
# Score

This is use as the score for an asset.  Manual: will be the raw sum of the asset activity events ranks with mechanismEnum == manual Automatic: will be the raw sum of the asset activity events ranks with mechanismEnum == automatic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**manual** | **number** | These are points assigned via manual user driven events. | [default to undefined]
**automatic** | **number** | These are point assigned via automatic activity events. | [default to undefined]
**priority** | **number** |  | [optional] [default to undefined]
**reuse** | **number** |  | [optional] [default to undefined]
**update** | **number** |  | [optional] [default to undefined]
**reference** | **number** |  | [optional] [default to undefined]

## Example

```typescript
import { Score } from '';

// TODO: Update the object below with actual values
const example: Score = {
    "schema": null, // 
    "manual": null, // These are points assigned via manual user driven events.
    "automatic": null, // These are point assigned via automatic activity events.
    "priority": null, // 
    "reuse": null, // 
    "update": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Score;
console.log(exampleParsed);
```




