
# TLPCodeFragmentClassificationMetadata


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**context** | [**Classification**](Classification)
**prior** | [**Classification**](Classification)

## Example

```typescript
import { TLPCodeFragmentClassificationMetadata } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentClassificationMetadata = {
    "schema": null,
    "context": null,
    "prior": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentClassificationMetadata;
console.log(exampleParsed);
```


