
# FlattenedConversation

This is a flattend version of the Convsersation for DAG-Safety.  This will hold together a conversation. Ie allthe message within a conversation.  All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.  model is a calculated property, and will be the model of the last message sent if applicable.  summaries: on the top level here will simply be used to associate a conversation and a summary(this is not used for grounding), grounding.summaries will be used for this.(TODO)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**id** | **string** |  | [default to undefined]
**name** | **string** | This is a name that is customized. | [optional] [default to undefined]
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [default to undefined]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [optional] [default to undefined]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] [default to undefined]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | [default to undefined]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] [default to undefined]
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] [default to undefined]
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | [default to undefined]
**grounding** | [**ConversationGrounding**](ConversationGrounding) |  | [optional] [default to undefined]
**score** | [**Score**](Score) |  | [optional] [default to undefined]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] [default to undefined]
**demo** | **boolean** | This will let us know if this conversation was generated as a \&#39;demo\&#39; conversation | [optional] [default to undefined]
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] [default to undefined]

## Example

```typescript
import { FlattenedConversation } from '';

// TODO: Update the object below with actual values
const example: FlattenedConversation = {
    "schema": null, // 
    "id": null, // 
    "name": null, // This is a name that is customized.
    "created": null, // 
    "updated": null, // 
    "deleted": null, // 
    "favorited": null, // 
    "application": null, // 
    "annotations": null, // 
    "messages": null, // 
    "model": null, // 
    "assets": null, // 
    "websites": null, // 
    "anchors": null, // 
    "type": null, // 
    "grounding": null, // 
    "score": null, // 
    "pipeline": null, // 
    "demo": null, // This will let us know if this conversation was generated as a \&#39;demo\&#39; conversation
    "summaries": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlattenedConversation;
console.log(exampleParsed);
```




