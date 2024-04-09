
# TransferableBytes

Bytes is a Model for A FileFormat. Raw and file are the only 2 that are currently supported. Raw and file are an array of integers that represent the file.Typical conversion UTF8 -> array[int] or UTF8 -> array[bytes(in hexidecimal)] -> array[int]. Either way you convert is up to you but the type we need here is an array of integers.  [NOT IMPLEMENTED] base64, base64_url, data_url [IMPLEMENTED] raw

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**raw** | **Array&lt;number&gt;**
**base64** | **Array&lt;number&gt;**
**base64Url** | **Array&lt;number&gt;**
**dataUrl** | **Array&lt;number&gt;**

## Example

```typescript
import { TransferableBytes } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TransferableBytes = {
    "schema": null,
    "raw": null,
    "base64": null,
    "base64Url": null,
    "dataUrl": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TransferableBytes;
console.log(exampleParsed);
```


