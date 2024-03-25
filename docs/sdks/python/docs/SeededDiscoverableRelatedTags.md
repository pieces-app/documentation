# SeededDiscoverableRelatedTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[SeededDiscoverableRelatedTag]**](SeededDiscoverableRelatedTag) |  | 
**application** | **str** | This is the application id that this request is sent from. | 

## Example

```python
from pieces_os_client.models.seeded_discoverable_related_tags import SeededDiscoverableRelatedTags

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableRelatedTags from a JSON string
seeded_discoverable_related_tags_instance = SeededDiscoverableRelatedTags.from_json(json)
# print the JSON string representation of the object
print SeededDiscoverableRelatedTags.to_json()

# convert the object into a dict
seeded_discoverable_related_tags_dict = seeded_discoverable_related_tags_instance.to_dict()
# create an instance of SeededDiscoverableRelatedTags from a dict
seeded_discoverable_related_tags_form_dict = seeded_discoverable_related_tags.from_dict(seeded_discoverable_related_tags_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


