# AnchorPoints

This is the plural of AnchorPoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[AnchorPoint]**](AnchorPoint) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an AnchorPoint id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.anchor_points import AnchorPoints

# TODO update the JSON string below
json = "{}"
# create an instance of AnchorPoints from a JSON string
anchor_points_instance = AnchorPoints.from_json(json)
# print the JSON string representation of the object
print(AnchorPoints.to_json())

# convert the object into a dict
anchor_points_dict = anchor_points_instance.to_dict()
# create an instance of AnchorPoints from a dict
anchor_points_form_dict = anchor_points.from_dict(anchor_points_dict)
```



