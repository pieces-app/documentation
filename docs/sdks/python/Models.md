# Models

This is a List of MachineLearning Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Model]**](Model) |  | 

## Example

```python
from pieces_os_client.models.models import Models

# TODO update the JSON string below
json = "{}"
# create an instance of Models from a JSON string
models_instance = Models.from_json(json)
# print the JSON string representation of the object
print Models.to_json()

# convert the object into a dict
models_dict = models_instance.to_dict()
# create an instance of Models from a dict
models_form_dict = models.from_dict(models_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


