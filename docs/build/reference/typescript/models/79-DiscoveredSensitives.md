
# DiscoveredSensitives



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;DiscoveredSensitive&gt;**](DiscoveredSensitive) |  | [default to undefined]
**application** | **string** |  | [default to undefined]

## Example

```typescript
import { DiscoveredSensitives } from '';

// TODO: Update the object below with actual values
const example: DiscoveredSensitives = {
    "schema": null, // 
    "iterable": null, // 
    "application": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DiscoveredSensitives;
console.log(exampleParsed);
```




