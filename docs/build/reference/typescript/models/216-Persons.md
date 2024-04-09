
# Persons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;Person&gt;**](Person)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)

## Example

```typescript
import { Persons } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: Persons = {
    "schema": null,
    "iterable": null,
    "indices": null,
    "score": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Persons;
console.log(exampleParsed);
```


