
# TLPCodeFragmentDescription

Model for ML big query Code Description.

## Properties

Name | Type
------------ | -------------
**description** | **string**
**asset** | **string**
**created** | **string**
**model** | **string**
**latency** | **number**
**user** | **string**
**context** | **string**
**os** | **string**

## Example

```typescript
import { TLPCodeFragmentDescription } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: TLPCodeFragmentDescription = {
    "description": null,
    "asset": null,
    "created": null,
    "model": null,
    "latency": null,
    "user": null,
    "context": null,
    "os": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeFragmentDescription;
console.log(exampleParsed);
```


