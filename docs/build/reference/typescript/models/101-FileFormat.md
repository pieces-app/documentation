
# FileFormat

This describes a FileFormat. If you need meta data you can get all of that from your format wrapper.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**bytes** | [**TransferableBytes**](TransferableBytes)
**string** | [**TransferableString**](TransferableString)

## Example

```typescript
import { FileFormat } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: FileFormat = {
    "schema": null,
    "bytes": null,
    "string": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FileFormat;
console.log(exampleParsed);
```


