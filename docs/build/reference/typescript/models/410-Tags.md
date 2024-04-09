
# Tags

This is a model that represents multiple Tag Models

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Tag&gt;**](Tag)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { Tags } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Tags = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Tags;
console.log(exampleParsed);
```


