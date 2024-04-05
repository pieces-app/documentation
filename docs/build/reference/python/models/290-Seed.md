# Seed

A seed Model used to wrap a format or asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**SeededAsset**](SeededAsset) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from pieces_os_client.models.seed import Seed

# TODO update the JSON string below
json = "{}"
# create an instance of Seed from a JSON string
seed_instance = Seed.from_json(json)
# print the JSON string representation of the object
print(Seed.to_json())

# convert the object into a dict
seed_dict = seed_instance.to_dict()
# create an instance of Seed from a dict
seed_form_dict = seed.from_dict(seed_dict)
```



