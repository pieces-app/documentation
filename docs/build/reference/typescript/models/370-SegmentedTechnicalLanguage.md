
# SegmentedTechnicalLanguage

This is the output model for \'/machine_learning/text/technical_language/parsers/segmentation\'  This will have an iterable of the segmented Technical language text/code

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**iterable** | [**Array&lt;SegmentedTechnicalLanguageFragment&gt;**](SegmentedTechnicalLanguageFragment) |  | [default to undefined]

## Example

```typescript
import { SegmentedTechnicalLanguage } from '';

// TODO: Update the object below with actual values
const example: SegmentedTechnicalLanguage = {
    "schema": null, // 
    "iterable": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SegmentedTechnicalLanguage;
console.log(exampleParsed);
```




