# ReferencedFormat

A reference to a format which at minimum must have the format's id. But in the case of a hydrated client API it may have a populated reference of type Format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The id of the Format | 
**reference** | [**FlattenedFormat**](FlattenedFormat) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_format import ReferencedFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedFormat from a JSON string
referenced_format_instance = ReferencedFormat.from_json(json)
# print the JSON string representation of the object
print(ReferencedFormat.to_json())

# convert the object into a dict
referenced_format_dict = referenced_format_instance.to_dict()
# create an instance of ReferencedFormat from a dict
referenced_format_form_dict = referenced_format.from_dict(referenced_format_dict)
```



