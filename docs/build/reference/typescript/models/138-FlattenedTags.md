
# FlattenedTags

This is multiple ReferencedTags(which includes an optional FlattenedTag Model within the reference model).

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedTag&gt;**](ReferencedTag)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedTags } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedTags = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedTags;
console.log(exampleParsed);
```


