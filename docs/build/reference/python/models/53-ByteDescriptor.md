# ByteDescriptor

This is a nice microclass to help with managing the size of a File or Fragment in a readable way for UI's

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**value** | **int** |  | 
**readable** | **str** |  | 

## Example

```python
from pieces_os_client.models.byte_descriptor import ByteDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ByteDescriptor from a JSON string
byte_descriptor_instance = ByteDescriptor.from_json(json)
# print the JSON string representation of the object
print(ByteDescriptor.to_json())

# convert the object into a dict
byte_descriptor_dict = byte_descriptor_instance.to_dict()
# create an instance of ByteDescriptor from a dict
byte_descriptor_form_dict = byte_descriptor.from_dict(byte_descriptor_dict)
```


