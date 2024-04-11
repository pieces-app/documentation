
# SegmentedTechnicalLanguageFragment

This is the output iterable model for \'/machine_learning/text/technical_language/parsers/segmentation\'  specific is optional here, however you can pass in classify: true to get the specific classificaiton in the case the generic is code.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**generic** | [**ClassificationGenericEnum**](ClassificationGenericEnum)
**specific** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**fragment** | [**FragmentFormat**](FragmentFormat)

## Example

```typescript
import { SegmentedTechnicalLanguageFragment } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SegmentedTechnicalLanguageFragment = {
    "schema": null,
    "generic": null,
    "specific": null,
    "fragment": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SegmentedTechnicalLanguageFragment
console.log(exampleParsed)
```


