
# SeededPKCEADDITIONALPARAMETERS

Append any additional parameter to the end of your request, and it will be sent to the provider. For example, access_type=offline (for Google Refresh Tokens) , display=popup (for Windows Live popup mode).

## Properties

Name | Type
------------ | -------------
**accessType** | **string**
**display** | **string**

## Example

```typescript
import { SeededPKCEADDITIONALPARAMETERS } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: SeededPKCEADDITIONALPARAMETERS = {
    "accessType": null,
    "display": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededPKCEADDITIONALPARAMETERS;
console.log(exampleParsed);
```


