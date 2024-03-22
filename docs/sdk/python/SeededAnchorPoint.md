# SeededAnchorPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | 
**watch** | **bool** |  | [optional] 
**fullpath** | **str** |  | 
**anchor** | **str** | Cannot create an AnchorPoint w/o a Anchor. | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_anchor_point import SeededAnchorPoint

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAnchorPoint from a JSON string
seeded_anchor_point_instance = SeededAnchorPoint.from_json(json)
# print the JSON string representation of the object
print SeededAnchorPoint.to_json()

# convert the object into a dict
seeded_anchor_point_dict = seeded_anchor_point_instance.to_dict()
# create an instance of SeededAnchorPoint from a dict
seeded_anchor_point_form_dict = seeded_anchor_point.from_dict(seeded_anchor_point_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


