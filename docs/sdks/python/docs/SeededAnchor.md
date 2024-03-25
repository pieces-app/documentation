# SeededAnchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | 
**watch** | **bool** |  | [optional] 
**fullpath** | **str** |  | 
**asset** | **str** | You may associate a SeededAnchor with an asset | [optional] 
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] 
**name** | **str** |  | [optional] 
**annotations** | [**List[SeededAnnotation]**](SeededAnnotation) |  | [optional] 
**conversation** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_anchor import SeededAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAnchor from a JSON string
seeded_anchor_instance = SeededAnchor.from_json(json)
# print the JSON string representation of the object
print SeededAnchor.to_json()

# convert the object into a dict
seeded_anchor_dict = seeded_anchor_instance.to_dict()
# create an instance of SeededAnchor from a dict
seeded_anchor_form_dict = seeded_anchor.from_dict(seeded_anchor_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


