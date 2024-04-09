
# TLPCodeSnippetTagifyCode



## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**distribution** | **string**
**inferredDistribution** | **string**
**tags** | **string**
**inferredTags** | **string**
**model** | **string**
**labelVersion** | **string**
**threshold** | **number**
**inferredThreshold** | **number**
**context** | **string**
**asset** | **string**

## Example

```typescript
import { TLPCodeSnippetTagifyCode } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TLPCodeSnippetTagifyCode = {
    "schema": null,
    "distribution": null,
    "inferredDistribution": null,
    "tags": null,
    "inferredTags": null,
    "model": null,
    "labelVersion": null,
    "threshold": null,
    "inferredThreshold": null,
    "context": null,
    "asset": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetTagifyCode;
console.log(exampleParsed);
```


