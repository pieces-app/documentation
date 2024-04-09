
# FlattenedSensitives

This is a flattened representation of multiple sensitive pieces of data.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedSensitive&gt;**](ReferencedSensitive)
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedSensitives } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedSensitives = {
    "schema": null,
    "iterable": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedSensitives;
console.log(exampleParsed);
```


