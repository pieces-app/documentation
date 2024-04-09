
# Preview

This is a preview Model that will hold references to at minimum the base preview. which can be potentiall a base image, or also base text/code and then the oveylay is another format(image/text/code) that is \'overlayed\' ontop of the base format.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**base** | [**ReferencedFormat**](ReferencedFormat)
**overlay** | [**ReferencedFormat**](ReferencedFormat)

## Example

```typescript
import { Preview } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Preview = {
    "schema": null,
    "base": null,
    "overlay": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Preview;
console.log(exampleParsed);
```


