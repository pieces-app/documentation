
# Linkify

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for. 

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**seed** | [**Seed**](Seed)
**asset** | [**Asset**](Asset)
**users** | [**Array&lt;SeededUser&gt;**](SeededUser)
**access** | [**AccessEnum**](AccessEnum)
**distributions** | [**SeededDistributions**](SeededDistributions)

## Example

```typescript
import { Linkify } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Linkify = {
    "schema": null,
    "seed": null,
    "asset": null,
    "users": null,
    "access": null,
    "distributions": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Linkify;
console.log(exampleParsed);
```


