
# SeededUser



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**emails** | **Array&lt;string&gt;** |  | [default to undefined]

## Example

```typescript
import { SeededUser } from '';

// TODO: Update the object below with actual values
const example: SeededUser = {
    "schema": null, // 
    "emails": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededUser;
console.log(exampleParsed);
```




