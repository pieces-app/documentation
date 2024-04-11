# SeededDistributions

This is the plural version of a SeededDistribution that is not referenced just yet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[SeededDistribution]**](SeededDistribution) |  | 

## Example

```python
from pieces_os_client.models.seeded_distributions import SeededDistributions

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDistributions from a JSON string
seeded_distributions_instance = SeededDistributions.from_json(json)
# print the JSON string representation of the object
print(SeededDistributions.to_json())

# convert the object into a dict
seeded_distributions_dict = seeded_distributions_instance.to_dict()
# create an instance of SeededDistributions from a dict
seeded_distributions_form_dict = seeded_distributions.from_dict(seeded_distributions_dict)
```


