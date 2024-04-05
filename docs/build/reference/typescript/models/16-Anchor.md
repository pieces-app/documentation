
# Anchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**name** | **string** |  | [optional] [default to undefined]
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | [default to undefined]
**watch** | **boolean** |  | [optional] [default to undefined]
**points** | [**FlattenedAnchorPoints**](FlattenedAnchorPoints) |  | [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { Anchor } from '';

// TODO: Update the object below with actual values
const example: Anchor = {
    "schema": null, // 
    "id": null, // 
    "name": null, // 
    "type": null, // 
    "watch": null, // 
    "points": null, // 
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "assets": null, // 
    "annotations": null, // 
    "conversations": null, // 
    "score": null, // 
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Anchor;
console.log(exampleParsed);
```




