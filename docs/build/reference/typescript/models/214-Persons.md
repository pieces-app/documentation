
# Persons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;Person&gt;**](Person) |  | [default to undefined]
**indices** | **\{ [key: string]: number; \}** | This is a Map&lt;String, int&gt; where the the key is an person id. | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { Persons } from '';

// TODO: Update the object below with actual values
const example: Persons = {
    "schema": null, // 
    "iterable": null, // 
    "indices": null, // This is a Map&lt;String, int&gt; where the the key is an person id.
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Persons;
console.log(exampleParsed);
```




