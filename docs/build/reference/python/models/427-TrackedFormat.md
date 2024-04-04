# TrackedFormat

A minimal format to send to Mixpanel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The UUID of the format | 
**classification** | [**Classification**](Classification) |  | 
**role** | [**Role**](Role) |  | 
**asset** | **str** | The UUID of the asset associated | 
**fragment** | **bool** |  | 
**file** | **bool** |  | 

## Example

```python
from pieces_os_client.models.tracked_format import TrackedFormat

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedFormat from a JSON string
tracked_format_instance = TrackedFormat.from_json(json)
# print the JSON string representation of the object
print(TrackedFormat.to_json())

# convert the object into a dict
tracked_format_dict = tracked_format_instance.to_dict()
# create an instance of TrackedFormat from a dict
tracked_format_form_dict = tracked_format.from_dict(tracked_format_dict)
```



