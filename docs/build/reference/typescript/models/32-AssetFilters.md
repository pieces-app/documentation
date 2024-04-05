
# AssetFilters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;AssetFilter&gt;**](AssetFilter) |  | [default to undefined]
**type** | [**FilterOperationTypeEnum**](FilterOperationTypeEnum) |  | [optional] [default to undefined]

## Example

```typescript
import { AssetFilters } from '';

// TODO: Update the object below with actual values
const example: AssetFilters = {
    "schema": null, // 
    "iterable": null, // 
    "type": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilters;
console.log(exampleParsed);
```




