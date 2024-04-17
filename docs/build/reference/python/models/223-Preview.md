# Preview

This is a preview Model that will hold references to at minimum the base preview. which can be potentiall a base image, or also base text/code and then the oveylay is another format(image/text/code) that is 'overlayed' ontop of the base format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**base** | [**ReferencedFormat**](ReferencedFormat) |  | 
**overlay** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] 

## Example

```python
from pieces_os_client.models.preview import Preview

# TODO update the JSON string below
json = "{}"
# create an instance of Preview from a JSON string
preview_instance = Preview.from_json(json)
# print the JSON string representation of the object
print(Preview.to_json())

# convert the object into a dict
preview_dict = preview_instance.to_dict()
# create an instance of Preview from a dict
preview_form_dict = preview.from_dict(preview_dict)
```


