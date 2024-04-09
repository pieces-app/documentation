
# AssetFilterTimestamp

if you want a range between you can use from && to.  if you want anything before, use to and NO from.  if you want anything after, use from and NO to.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**from** | [**GroupedTimestamp**](GroupedTimestamp)
**to** | [**GroupedTimestamp**](GroupedTimestamp)
**between** | **boolean**

## Example

```typescript
import { AssetFilterTimestamp } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: AssetFilterTimestamp = {
    "schema": null,
    "from": null,
    "to": null,
    "between": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetFilterTimestamp;
console.log(exampleParsed);
```


