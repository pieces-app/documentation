# FlattenedDistributions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedDistribution]**](ReferencedDistribution) |  | 

## Example

```python
from pieces_os_client.models.flattened_distributions import FlattenedDistributions

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedDistributions from a JSON string
flattened_distributions_instance = FlattenedDistributions.from_json(json)
# print the JSON string representation of the object
print FlattenedDistributions.to_json()

# convert the object into a dict
flattened_distributions_dict = flattened_distributions_instance.to_dict()
# create an instance of FlattenedDistributions from a dict
flattened_distributions_form_dict = flattened_distributions.from_dict(flattened_distributions_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


