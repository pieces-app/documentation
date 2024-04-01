# Allocations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[AllocationCloud]**](AllocationCloud) |  | 

## Example

```python
from pieces_os_client.models.allocations import Allocations

# TODO update the JSON string below
json = "{}"
# create an instance of Allocations from a JSON string
allocations_instance = Allocations.from_json(json)
# print the JSON string representation of the object
print Allocations.to_json()

# convert the object into a dict
allocations_dict = allocations_instance.to_dict()
# create an instance of Allocations from a dict
allocations_form_dict = allocations.from_dict(allocations_dict)
```



