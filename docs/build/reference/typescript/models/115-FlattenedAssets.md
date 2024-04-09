
# FlattenedAssets

A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedAsset&gt;**](ReferencedAsset)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedAssets } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedAssets = {
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
const exampleParsed = JSON.parse(exampleJSON) as FlattenedAssets;
console.log(exampleParsed);
```


