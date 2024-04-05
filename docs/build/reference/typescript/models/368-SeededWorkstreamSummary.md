
# SeededWorkstreamSummary

This is a seeded version of a WorkstreamSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation) |  | [optional] [default to undefined]
**ranges** | [**FlattenedRanges**](FlattenedRanges) |  | [optional] [default to undefined]
**model** | [**Model**](Model) |  | [default to undefined]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] [default to undefined]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] [default to undefined]
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] [default to undefined]
**applications** | [**Applications**](Applications) |  | [optional] [default to undefined]

## Example

```typescript
import { SeededWorkstreamSummary } from '';

// TODO: Update the object below with actual values
const example: SeededWorkstreamSummary = {
    "schema": null, // 
    "events": null, // 
    "name": null, // 
    "annotations": null, // 
    "ranges": null, // 
    "model": null, // 
    "websites": null, // 
    "anchors": null, // 
    "assets": null, // 
    "conversations": null, // 
    "persons": null, // 
    "applications": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededWorkstreamSummary;
console.log(exampleParsed);
```




