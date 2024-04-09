
# FormatMetric

FormatMetric  This is a model that will represent the about of specific formats. ie Generic: \'CODE\' specific: \'DART\' identifiers: [\'FormatUID1, \'FormatUID2\']

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum)
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**identifiers** | **Array&lt;string&gt;**

## Example

```typescript
import { FormatMetric } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FormatMetric = {
    "schema": null,
    "generic": null,
    "specific": null,
    "identifiers": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatMetric;
console.log(exampleParsed);
```


