
# InteractedAssetInteractions


## Properties

Name | Type
------------ | -------------
**viewed** | **string**
**touched** | **boolean**
**scrolled** | **boolean**

## Example

```typescript
import { InteractedAssetInteractions } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: InteractedAssetInteractions = {
    "viewed": null,
    "touched": null,
    "scrolled": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as InteractedAssetInteractions;
console.log(exampleParsed);
```


