# FlattenedAnchorPoint


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
from pieces_os_client.models.flattened_anchor_point import FlattenedAnchorPoint

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedAnchorPoint from a JSON string
flattened_anchor_point_instance = FlattenedAnchorPoint.from_json(json)
# print the JSON string representation of the object
print(FlattenedAnchorPoint.to_json())

# convert the object into a dict
flattened_anchor_point_dict = flattened_anchor_point_instance.to_dict()
# create an instance of FlattenedAnchorPoint from a dict
flattened_anchor_point_form_dict = flattened_anchor_point.from_dict(flattened_anchor_point_dict)
```


