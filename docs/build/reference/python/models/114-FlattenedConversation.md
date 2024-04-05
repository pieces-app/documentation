# FlattenedConversation

This is a flattend version of the Convsersation for DAG-Safety.  This will hold together a conversation. Ie allthe message within a conversation.  All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.  model is a calculated property, and will be the model of the last message sent if applicable.  summaries: on the top level here will simply be used to associate a conversation and a summary(this is not used for grounding), grounding.summaries will be used for this.(TODO)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**name** | **str** | This is a name that is customized. | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**favorited** | **bool** |  | [optional] 
**application** | [**Application**](Application) |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  | 
**model** | [**ReferencedModel**](ReferencedModel) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**anchors** | [**FlattenedAnchors**](FlattenedAnchors) |  | [optional] 
**type** | [**ConversationTypeEnum**](ConversationTypeEnum) |  | 
**grounding** | [**ConversationGrounding**](ConversationGrounding) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**pipeline** | [**QGPTPromptPipeline**](QGPTPromptPipeline) |  | [optional] 
**demo** | **bool** | This will let us know if this conversation was generated as a &#39;demo&#39; conversation | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_conversation import FlattenedConversation

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedConversation from a JSON string
flattened_conversation_instance = FlattenedConversation.from_json(json)
# print the JSON string representation of the object
print(FlattenedConversation.to_json())

# convert the object into a dict
flattened_conversation_dict = flattened_conversation_instance.to_dict()
# create an instance of FlattenedConversation from a dict
flattened_conversation_form_dict = flattened_conversation.from_dict(flattened_conversation_dict)
```



