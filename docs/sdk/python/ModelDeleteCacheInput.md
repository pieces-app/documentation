# ModelDeleteCacheInput

This is the input model for '/model/{model}/delete/cache'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 

## Example

```python
from pieces_os_client.models.model_delete_cache_input import ModelDeleteCacheInput

# TODO update the JSON string below
json = "{}"
# create an instance of ModelDeleteCacheInput from a JSON string
model_delete_cache_input_instance = ModelDeleteCacheInput.from_json(json)
# print the JSON string representation of the object
print ModelDeleteCacheInput.to_json()

# convert the object into a dict
model_delete_cache_input_dict = model_delete_cache_input_instance.to_dict()
# create an instance of ModelDeleteCacheInput from a dict
model_delete_cache_input_form_dict = model_delete_cache_input.from_dict(model_delete_cache_input_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


