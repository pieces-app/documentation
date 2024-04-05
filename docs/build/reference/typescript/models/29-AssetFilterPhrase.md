
# AssetFilterPhrase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**value** | **string** |  | [optional] [default to undefined]
**annotation** | **boolean** |  | [optional] [default to undefined]
**title** | **boolean** |  | [optional] [default to undefined]
**content** | **boolean** |  | [optional] [default to undefined]
**options** | [**AssetFilterPhraseOptions**](AssetFilterPhraseOptions) |  | [optional] [default to undefined]

## Example

```typescript
import { AssetFilterPhrase } from '';

// TODO: Update the object below with actual values
const example: AssetFilterPhrase = {
    "schema": null, // 
    "value": null, // 
    "annotation": null, // 
    "title": null, // 
    "content": null, // 
    "options": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilterPhrase;
console.log(exampleParsed);
```




