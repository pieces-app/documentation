
# SeededHint


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**asset** | **string**
**type** | [**HintTypeEnum**](HintTypeEnum)
**text** | **string**
**model** | **string**

## Example

```typescript
import { SeededHint } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededHint = {
    "schema": null,
    "mechanism": null,
    "asset": null,
    "type": null,
    "text": null,
    "model": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededHint;
console.log(exampleParsed);
```


