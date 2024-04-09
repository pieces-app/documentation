
# CodeAnalyses


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;CodeAnalysis&gt;**](CodeAnalysis)

## Example

```typescript
import { CodeAnalyses } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: CodeAnalyses = {
    "schema": null,
    "iterable": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CodeAnalyses;
console.log(exampleParsed);
```


