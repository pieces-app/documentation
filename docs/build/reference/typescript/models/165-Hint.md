
# Hint

This is a hint that is attached to an asset, used for suggested_queries, and hints given via the qgpt flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] [default to undefined]
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] [default to undefined]
**type** | [**HintTypeEnum**](HintTypeEnum) |  | [default to undefined]
**text** | **string** | This is the text of the hint. | [default to undefined]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]

## Example

```typescript
import { Hint } from '';

// TODO: Update the object below with actual values
const example: Hint = {
    "schema": null, // 
    "id": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "mechanism": null, // 
    "asset": null, // 
    "type": null, // 
    "text": null, // This is the text of the hint.
    "model": null, // 
    "score": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Hint;
console.log(exampleParsed);
```




