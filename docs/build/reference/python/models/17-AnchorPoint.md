# AnchorPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**verified** | **bool** |  | [optional] 
**fullpath** | **str** | This is the text of the path. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**platform** | [**PlatformEnum**](PlatformEnum) |  | [optional] 
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.anchor_point import AnchorPoint

# TODO update the JSON string below
json = "{}"
# create an instance of AnchorPoint from a JSON string
anchor_point_instance = AnchorPoint.from_json(json)
# print the JSON string representation of the object
print(AnchorPoint.to_json())

# convert the object into a dict
anchor_point_dict = anchor_point_instance.to_dict()
# create an instance of AnchorPoint from a dict
anchor_point_form_dict = anchor_point.from_dict(anchor_point_dict)
```


