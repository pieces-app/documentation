# TextLocation

This is a generic model that is used for text location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | this is the value that was found. | 
**start** | **int** | this is the start index within the original string. | 
**end** | **int** | this is the end index within the original string. | 

## Example

```python
from pieces_os_client.models.text_location import TextLocation

# TODO update the JSON string below
json = "{}"
# create an instance of TextLocation from a JSON string
text_location_instance = TextLocation.from_json(json)
# print the JSON string representation of the object
print TextLocation.to_json()

# convert the object into a dict
text_location_dict = text_location_instance.to_dict()
# create an instance of TextLocation from a dict
text_location_form_dict = text_location.from_dict(text_location_dict)
```



