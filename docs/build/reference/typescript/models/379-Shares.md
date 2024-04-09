
# Shares

this is just an iterable of our individual share models.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Share&gt;**](Share)
**score** | [**Score**](Score)

## Example

```typescript
import { Shares } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Shares = {
    "schema": null,
    "iterable": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Shares;
console.log(exampleParsed);
```


