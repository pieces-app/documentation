# ReferencedDistribution



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedDistribution**](FlattenedDistribution) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_distribution import ReferencedDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedDistribution from a JSON string
referenced_distribution_instance = ReferencedDistribution.from_json(json)
# print the JSON string representation of the object
print ReferencedDistribution.to_json()

# convert the object into a dict
referenced_distribution_dict = referenced_distribution_instance.to_dict()
# create an instance of ReferencedDistribution from a dict
referenced_distribution_form_dict = referenced_distribution.from_dict(referenced_distribution_dict)
```



