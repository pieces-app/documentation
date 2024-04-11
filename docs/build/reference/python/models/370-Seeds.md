# Seeds

This is a plural model for multiple Seed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Seed]**](Seed) |  | 

## Example

```python
from pieces_os_client.models.seeds import Seeds

# TODO update the JSON string below
json = "{}"
# create an instance of Seeds from a JSON string
seeds_instance = Seeds.from_json(json)
# print the JSON string representation of the object
print(Seeds.to_json())

# convert the object into a dict
seeds_dict = seeds_instance.to_dict()
# create an instance of Seeds from a dict
seeds_form_dict = seeds.from_dict(seeds_dict)
```


