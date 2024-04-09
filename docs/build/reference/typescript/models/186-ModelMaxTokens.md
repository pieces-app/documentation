
# ModelMaxTokens

This will describe the MaxTokens for an MLModel  total is required.  iff there is a differentiator with inputs/outputs, then we can also provide those as well.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**total** | **number**
**input** | **number**
**output** | **number**

## Example

```typescript
import { ModelMaxTokens } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ModelMaxTokens = {
    "schema": null,
    "total": null,
    "input": null,
    "output": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ModelMaxTokens;
console.log(exampleParsed);
```


