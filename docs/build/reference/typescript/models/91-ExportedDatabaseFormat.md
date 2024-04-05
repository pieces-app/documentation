
# ExportedDatabaseFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** | this is the id of the format | [default to undefined]
**raw** | **Array&lt;number&gt;** | these are bytes. | [default to undefined]

## Example

```typescript
import { ExportedDatabaseFormat } from '';

// TODO: Update the object below with actual values
const example: ExportedDatabaseFormat = {
    "schema": null, // 
    "id": null, // this is the id of the format
    "raw": null, // these are bytes.
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ExportedDatabaseFormat;
console.log(exampleParsed);
```




