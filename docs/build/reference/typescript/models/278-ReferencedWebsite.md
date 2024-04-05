
# ReferencedWebsite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**reference** | [**FlattenedWebsite**](FlattenedWebsite) |  | [optional] [default to undefined]

## Example

```typescript
import { ReferencedWebsite } from '';

// TODO: Update the object below with actual values
const example: ReferencedWebsite = {
    "schema": null, // 
    "id": null, // 
    "reference": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReferencedWebsite;
console.log(exampleParsed);
```




