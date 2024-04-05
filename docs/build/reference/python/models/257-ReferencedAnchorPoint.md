# ReferencedAnchorPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedAnchorPoint**](FlattenedAnchorPoint) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_anchor_point import ReferencedAnchorPoint

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedAnchorPoint from a JSON string
referenced_anchor_point_instance = ReferencedAnchorPoint.from_json(json)
# print the JSON string representation of the object
print(ReferencedAnchorPoint.to_json())

# convert the object into a dict
referenced_anchor_point_dict = referenced_anchor_point_instance.to_dict()
# create an instance of ReferencedAnchorPoint from a dict
referenced_anchor_point_form_dict = referenced_anchor_point.from_dict(referenced_anchor_point_dict)
```



