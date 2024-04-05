
# AssetFilter

** in the future, consider adding an optional bool\'s called nextAnd, nextOr which will say that the next filter will be  AND behavor or OR behavior.  \"operations\": here is is an optional property to allow or behavior,(we will only allow 1 level deep of or\'s), if or is not passed in then it is just simply ignored. If or is passed in then we will be or\'d together with the top level filter and considered extras. default behavior for operations is and, however yoour can specifiy OR operations as well.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**classification** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] [default to undefined]
**tags** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**websites** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**persons** | **Array&lt;string&gt;** |  | [optional] [default to undefined]
**phrase** | [**AssetFilterPhrase**](AssetFilterPhrase) |  | [optional] [default to undefined]
**created** | [**AssetFilterTimestamp**](AssetFilterTimestamp) |  | [optional] [default to undefined]
**updated** | [**AssetFilterTimestamp**](AssetFilterTimestamp) |  | [optional] [default to undefined]
**operations** | [**AssetFilters**](AssetFilters) |  | [optional] [default to undefined]

## Example

```typescript
import { AssetFilter } from '';

// TODO: Update the object below with actual values
const example: AssetFilter = {
    "schema": null, // 
    "classification": null, // 
    "tags": null, // 
    "websites": null, // 
    "persons": null, // 
    "phrase": null, // 
    "created": null, // 
    "updated": null, // 
    "operations": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilter;
console.log(exampleParsed);
```




