
# FormatMetric

FormatMetric  This is a model that will represent the about of specific formats. ie Generic: \'CODE\' specific: \'DART\' identifiers: [\'FormatUID1, \'FormatUID2\']

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | [default to undefined]
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [default to undefined]
**identifiers** | **Array&lt;string&gt;** | this is a list of format ids | [default to undefined]

## Example

```typescript
import { FormatMetric } from '';

// TODO: Update the object below with actual values
const example: FormatMetric = {
    "schema": null, // 
    "generic": null, // 
    "specific": null, // 
    "identifiers": null, // this is a list of format ids
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FormatMetric;
console.log(exampleParsed);
```




