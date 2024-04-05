
# InteractedAssetInteractions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewed** | **string** | https://en.wikipedia.org/wiki/ISO_8601#Time_intervals | [default to undefined]
**touched** | **boolean** | If the user touched or panned over the asset. | [optional] [default to false]
**scrolled** | **boolean** | If the user scrolled over the asset. | [optional] [default to false]

## Example

```typescript
import { InteractedAssetInteractions } from '';

// TODO: Update the object below with actual values
const example: InteractedAssetInteractions = {
    "viewed": null, // https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
    "touched": null, // If the user touched or panned over the asset.
    "scrolled": null, // If the user scrolled over the asset.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAssetInteractions;
console.log(exampleParsed);
```




