
# ExportedDatabaseFormat


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**raw** | **Array&lt;number&gt;**

## Example

```typescript
import { ExportedDatabaseFormat } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: ExportedDatabaseFormat = {
    "schema": null,
    "id": null,
    "raw": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedDatabaseFormat;
console.log(exampleParsed);
```


