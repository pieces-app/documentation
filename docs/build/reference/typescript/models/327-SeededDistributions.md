
# SeededDistributions

This is the plural version of a SeededDistribution that is not referenced just yet.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;SeededDistribution&gt;**](SeededDistribution)

## Example

```typescript
import { SeededDistributions } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededDistributions = {
    "schema": null,
    "iterable": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDistributions;
console.log(exampleParsed);
```


