
# FlattenedHint

This is the flattened version of a hint. Ensure that you DO NOT reference the Asset here as you can create an infinite loop within the packaging.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**type** | [**HintTypeEnum**](HintTypeEnum)
**text** | **string**
**model** | [**ReferencedModel**](ReferencedModel)
**score** | [**Score**](Score)

## Example

```typescript
import { FlattenedHint } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FlattenedHint = {
    "schema": null,
    "id": null,
    "created": null,
    "updated": null,
    "deleted": null,
    "mechanism": null,
    "asset": null,
    "type": null,
    "text": null,
    "model": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedHint;
console.log(exampleParsed);
```


