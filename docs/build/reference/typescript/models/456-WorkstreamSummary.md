
# WorkstreamSummary

This is representation or a summarized version of the highly relevant WorkstreamEvent events from a given time period, 1 day, 1 week, 1 month, dependinng on your given flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**events** | [**FlattenedWorkstreamEvents**](FlattenedWorkstreamEvents) |  | [optional] [default to undefined]
**name** | **string** |  | [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]
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
import { WorkstreamSummary } from '';

// TODO: Update the object below with actual values
const example: WorkstreamSummary = {
    "schema": null, // 
    "id": null, // 
    "score": null, // 
    "created": null, // 
    "updated": null, // 
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
const exampleParsed = JSON.parse(exampleJSON) as WorkstreamSummary;
console.log(exampleParsed);
```




