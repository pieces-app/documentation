# FragmentFormat

This will be either a TransferableString or TransferableBytes that represent your fragment. ONLY Pass one or the other DONT pass both or neither.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**string** | [**TransferableString**](TransferableString) |  | [optional] 
**bytes** | [**TransferableBytes**](TransferableBytes) |  | [optional] 
**metadata** | [**FragmentMetadata**](FragmentMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.fragment_format import FragmentFormat

# TODO update the JSON string below
json = "{}"
# create an instance of FragmentFormat from a JSON string
fragment_format_instance = FragmentFormat.from_json(json)
# print the JSON string representation of the object
print(FragmentFormat.to_json())

# convert the object into a dict
fragment_format_dict = fragment_format_instance.to_dict()
# create an instance of FragmentFormat from a dict
fragment_format_form_dict = fragment_format.from_dict(fragment_format_dict)
```


