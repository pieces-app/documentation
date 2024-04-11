# TransferableString

This is a String representaion of any of these changes.  [NOT IMPLEMENTED] base64, base64_url, data_url [IMPLEMENTED] raw

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**raw** | **str** | IMPLEMENTED | [optional] 
**var_base64** | **str** | NOT IMPLEMENTED | [optional] 
**base64_url** | **str** | NOT IMPLEMENTED | [optional] 
**data_url** | **str** | NOT IMPLEMENTED | [optional] 

## Example

```python
from pieces_os_client.models.transferable_string import TransferableString

# TODO update the JSON string below
json = "{}"
# create an instance of TransferableString from a JSON string
transferable_string_instance = TransferableString.from_json(json)
# print the JSON string representation of the object
print(TransferableString.to_json())

# convert the object into a dict
transferable_string_dict = transferable_string_instance.to_dict()
# create an instance of TransferableString from a dict
transferable_string_form_dict = transferable_string.from_dict(transferable_string_dict)
```


