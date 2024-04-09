
# ReferencedWebsite


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**reference** | [**FlattenedWebsite**](FlattenedWebsite)

## Example

```typescript
import { ReferencedWebsite } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ReferencedWebsite = {
    "schema": null,
    "id": null,
    "reference": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedWebsite;
console.log(exampleParsed);
```


