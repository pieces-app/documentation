# ReuseReaction

if reuse was used in the reaction then we can provide the uuid of the asset that was reused.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 

## Example

```python
from pieces_os_client.models.reuse_reaction import ReuseReaction

# TODO update the JSON string below
json = "{}"
# create an instance of ReuseReaction from a JSON string
reuse_reaction_instance = ReuseReaction.from_json(json)
# print the JSON string representation of the object
print ReuseReaction.to_json()

# convert the object into a dict
reuse_reaction_dict = reuse_reaction_instance.to_dict()
# create an instance of ReuseReaction from a dict
reuse_reaction_form_dict = reuse_reaction.from_dict(reuse_reaction_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


