
# AssetFilterTimestamp

if you want a range between you can use from && to.  if you want anything before, use to and NO from.  if you want anything after, use from and NO to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**between** | **boolean** |  | [optional] [default to undefined]

## Example

```typescript
import { AssetFilterTimestamp } from '';

// TODO: Update the object below with actual values
const example: AssetFilterTimestamp = {
    "schema": null, // 
    "from": null, // 
    "to": null, // 
    "between": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilterTimestamp;
console.log(exampleParsed);
```




