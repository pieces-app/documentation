
# ReferencedShare

This is a [DAG SAFE] version of a share. with just a required share ID.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedShare**](FlattenedShare)

## Example

```typescript
import { ReferencedShare } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ReferencedShare = {
    "schema": null,
    "id": null,
    "reference": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedShare;
console.log(exampleParsed);
```


