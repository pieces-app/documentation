
# GroupedTimestamp

A helper classs to wrap Date-Time Values with Useful Helper Properties

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**value** | **Date**
**readable** | **string**

## Example

```typescript
import { GroupedTimestamp } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: GroupedTimestamp = {
    "schema": null,
    "value": null,
    "readable": Last week - June 3rd, 3:33 a.m.,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GroupedTimestamp;
console.log(exampleParsed);
```


