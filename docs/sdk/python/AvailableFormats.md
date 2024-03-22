# AvailableFormats

This is a specific model here used within the SeededAsset that enables us to return all the available formats on a specific seed that was passed as an input within the '/assets/draft' endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Classification]**](Classification) |  | 

## Example

```python
from pieces_os_client.models.available_formats import AvailableFormats

# TODO update the JSON string below
json = "{}"
# create an instance of AvailableFormats from a JSON string
available_formats_instance = AvailableFormats.from_json(json)
# print the JSON string representation of the object
print AvailableFormats.to_json()

# convert the object into a dict
available_formats_dict = available_formats_instance.to_dict()
# create an instance of AvailableFormats from a dict
available_formats_form_dict = available_formats.from_dict(available_formats_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


