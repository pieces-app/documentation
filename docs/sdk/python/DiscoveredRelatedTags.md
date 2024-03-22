# DiscoveredRelatedTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **str** |  | 
**iterable** | [**List[DiscoveredRelatedTag]**](DiscoveredRelatedTag) |  | 

## Example

```python
from pieces_os_client.models.discovered_related_tags import DiscoveredRelatedTags

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredRelatedTags from a JSON string
discovered_related_tags_instance = DiscoveredRelatedTags.from_json(json)
# print the JSON string representation of the object
print DiscoveredRelatedTags.to_json()

# convert the object into a dict
discovered_related_tags_dict = discovered_related_tags_instance.to_dict()
# create an instance of DiscoveredRelatedTags from a dict
discovered_related_tags_form_dict = discovered_related_tags.from_dict(discovered_related_tags_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


