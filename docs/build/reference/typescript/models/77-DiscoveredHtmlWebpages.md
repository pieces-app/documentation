
# DiscoveredHtmlWebpages

Assumption: The iterable will be in the exact same order as it was passed in within the seededDiscoveredHtmlWebpages

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;DiscoveredHtmlWebpage&gt;**](DiscoveredHtmlWebpage)
**application** | **string**

## Example

```typescript
import { DiscoveredHtmlWebpages } from '@pieces.app/pieces-os-client';

// TODO: Update the object below with actual values
const example: DiscoveredHtmlWebpages = {
    "schema": null,
    "iterable": null,
    "application": null,
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredHtmlWebpages;
console.log(exampleParsed);
```


