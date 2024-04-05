# DiscoveredRelatedTag


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**seed** | [**SeededTag**](SeededTag) |  | 

## Example

```python
from pieces_os_client.models.discovered_related_tag import DiscoveredRelatedTag

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredRelatedTag from a JSON string
discovered_related_tag_instance = DiscoveredRelatedTag.from_json(json)
# print the JSON string representation of the object
print(DiscoveredRelatedTag.to_json())

# convert the object into a dict
discovered_related_tag_dict = discovered_related_tag_instance.to_dict()
# create an instance of DiscoveredRelatedTag from a dict
discovered_related_tag_form_dict = discovered_related_tag.from_dict(discovered_related_tag_dict)
```



