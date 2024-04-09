
# SeededClassification

This is the specific classification of an Asset\'s Format.(This is on a per format basis b/c an asset could have different formats that are different format representations of the Asset.)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum)
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**rendering** | [**ClassificationRenderingEnum**](ClassificationRenderingEnum)

## Example

```typescript
import { SeededClassification } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededClassification = {
    "schema": null,
    "generic": null,
    "specific": null,
    "rendering": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededClassification;
console.log(exampleParsed);
```


