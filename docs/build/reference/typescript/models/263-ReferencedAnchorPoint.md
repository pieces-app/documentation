
# ReferencedAnchorPoint


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedAnchorPoint**](FlattenedAnchorPoint)

## Example

```typescript
import { ReferencedAnchorPoint } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ReferencedAnchorPoint = {
    "schema": null,
    "id": null,
    "reference": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedAnchorPoint;
console.log(exampleParsed);
```


