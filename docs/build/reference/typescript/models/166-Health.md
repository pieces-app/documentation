
# Health

This is a health model used to determine the \"health\" of the os server and cloud server(Coming Soon). READONLY Model.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**os** | [**OSHealth**](OSHealth)

## Example

```typescript
import { Health } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Health = {
    "schema": null,
    "os": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Health;
console.log(exampleParsed);
```


