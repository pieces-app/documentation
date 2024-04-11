
# TLPCodeSnippetAnalytics


## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**statistics** | [**TLPCodeFragmentStatistics**](TLPCodeFragmentStatistics)
**classification** | [**TLPCodeFragmentClassification**](TLPCodeFragmentClassification)
**reclassification** | [**TLPCodeFragmentReclassification**](TLPCodeFragmentReclassification)
**suggested** | [**TLPCodeSnippetSuggestedInteractions**](TLPCodeSnippetSuggestedInteractions)
**tagify** | [**TLPCodeFragmentTagify**](TLPCodeFragmentTagify)
**description** | [**TLPCodeFragmentDescription**](TLPCodeFragmentDescription)

## Example

```typescript
import { TLPCodeSnippetAnalytics } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: TLPCodeSnippetAnalytics = {
    "schema": null,
    "statistics": null,
    "classification": null,
    "reclassification": null,
    "suggested": null,
    "tagify": null,
    "description": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TLPCodeSnippetAnalytics
console.log(exampleParsed)
```


