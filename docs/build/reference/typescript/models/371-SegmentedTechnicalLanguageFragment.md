
# SegmentedTechnicalLanguageFragment

This is the output iterable model for \'/machine_learning/text/technical_language/parsers/segmentation\'  specific is optional here, however you can pass in classify: true to get the specific classificaiton in the case the generic is code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum) |  | [default to undefined]
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] [default to undefined]
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [default to undefined]

## Example

```typescript
import { SegmentedTechnicalLanguageFragment } from '';

// TODO: Update the object below with actual values
const example: SegmentedTechnicalLanguageFragment = {
    "schema": null, // 
    "generic": null, // 
    "specific": null, // 
    "fragment": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SegmentedTechnicalLanguageFragment;
console.log(exampleParsed);
```




