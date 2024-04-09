
# SeededDiscoverableRelatedTag



## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**text** | **string**
**asset** | **string**
**mechanism** | [**MechanismEnum**](MechanismEnum)
**format** | **string**
**category** | [**TagCategoryEnum**](TagCategoryEnum)

## Example

```typescript
import { SeededDiscoverableRelatedTag } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededDiscoverableRelatedTag = {
    "schema": null,
    "text": null,
    "asset": null,
    "mechanism": null,
    "format": null,
    "category": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededDiscoverableRelatedTag;
console.log(exampleParsed);
```


