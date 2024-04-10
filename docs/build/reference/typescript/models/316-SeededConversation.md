
# SeededConversation Model

This is a pre-Conversation object.  This will hold together a conversation. Ie allthe message within a conversation.  All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.  model is a calculated property, and will be the model of the last message sent if applicable.

## Properties Model

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**favorited** | **boolean**
**application** | [**Application**](Application)
**annotations** | [**Array&lt;SeededAnnotation&gt;**](SeededAnnotation)
**messages** | [**Array&lt;SeededConversationMessage&gt;**](SeededConversationMessage)
**model** | [**ReferencedModel**](ReferencedModel)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**anchors** | [**Array&lt;SeededAnchor&gt;**](SeededAnchor)
**type** | [**ConversationTypeEnum**](ConversationTypeEnum)
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline)
**demo** | **boolean**

## Example Model

```typescript
import { SeededConversation } from '@pieces.app/pieces-os-client'

// TODO: Update the object below with actual values
const example: SeededConversation = {
    "schema": null,
    "name": null,
    "favorited": null,
    "application": null,
    "annotations": null,
    "messages": null,
    "model": null,
    "assets": null,
    "websites": null,
    "anchors": null,
    "type": null,
    "pipeline": null,
    "demo": null,
}

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SeededConversation
console.log(exampleParsed)
```


