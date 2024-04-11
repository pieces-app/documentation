# ConversationsCreateFromAssetOutput

This is the model for the output for the \"/conversations/create/from_asset/\{asset\}\" endpoints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | 

## Example

```python
from pieces_os_client.models.conversations_create_from_asset_output import ConversationsCreateFromAssetOutput

# TODO update the JSON string below
json = "{}"
# create an instance of ConversationsCreateFromAssetOutput from a JSON string
conversations_create_from_asset_output_instance = ConversationsCreateFromAssetOutput.from_json(json)
# print the JSON string representation of the object
print(ConversationsCreateFromAssetOutput.to_json())

# convert the object into a dict
conversations_create_from_asset_output_dict = conversations_create_from_asset_output_instance.to_dict()
# create an instance of ConversationsCreateFromAssetOutput from a dict
conversations_create_from_asset_output_form_dict = conversations_create_from_asset_output.from_dict(conversations_create_from_asset_output_dict)
```


