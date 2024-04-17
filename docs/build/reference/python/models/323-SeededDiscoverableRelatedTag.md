# SeededDiscoverableRelatedTag



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | This is the description of the tag. | 
**asset** | **str** | this is a uuid that references an asset. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**format** | **str** | (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well. | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_discoverable_related_tag import SeededDiscoverableRelatedTag

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableRelatedTag from a JSON string
seeded_discoverable_related_tag_instance = SeededDiscoverableRelatedTag.from_json(json)
# print the JSON string representation of the object
print(SeededDiscoverableRelatedTag.to_json())

# convert the object into a dict
seeded_discoverable_related_tag_dict = seeded_discoverable_related_tag_instance.to_dict()
# create an instance of SeededDiscoverableRelatedTag from a dict
seeded_discoverable_related_tag_form_dict = seeded_discoverable_related_tag.from_dict(seeded_discoverable_related_tag_dict)
```


