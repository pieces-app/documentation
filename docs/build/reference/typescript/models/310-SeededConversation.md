
# SeededConversation

This is a pre-Conversation object.  This will hold together a conversation. Ie allthe message within a conversation.  All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.  model is a calculated property, and will be the model of the last message sent if applicable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**name** | **string** | This is a name that is customized. | [optional] [default to undefined]
**favorited** | **boolean** |  | [optional] [default to undefined]
**application** | [**Application**](Application) |  | [optional] [default to undefined]
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation) |  | [optional] [default to undefined]
**messages** | [**Array&lt;SeededConversationMessage&gt;**](SeededConversationMessage) |  | [optional] [default to undefined]
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] [default to undefined]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] [default to undefined]
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] [default to undefined]
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor) |  | [optional] [default to undefined]
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | [default to undefined]
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] [default to undefined]
**demo** | **boolean** | This will let us know if this conversation was generated as a \&#39;demo\&#39; conversation | [optional] [default to undefined]

## Example

```typescript
import { SeededConversation } from '';

// TODO: Update the object below with actual values
const example: SeededConversation = {
    "schema": null, // 
    "name": null, // This is a name that is customized.
    "favorited": null, // 
    "application": null, // 
    "annotations": null, // 
    "messages": null, // 
    "model": null, // 
    "assets": null, // 
    "websites": null, // 
    "anchors": null, // 
    "type": null, // 
    "pipeline": null, // 
    "demo": null, // This will let us know if this conversation was generated as a \&#39;demo\&#39; conversation
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConversation;
console.log(exampleParsed);
```




