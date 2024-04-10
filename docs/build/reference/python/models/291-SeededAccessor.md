# SeededAccessor

This is a pre-created accessor that simply takes an os id and an optional user(flattened)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**os** | **str** | this is an os id. | 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 
**share** | **str** | this is the share that the asset is apart of. | 

## Example

```python
from pieces_os_client.models.seeded_accessor import SeededAccessor

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAccessor from a JSON string
seeded_accessor_instance = SeededAccessor.from_json(json)
# print the JSON string representation of the object
print(SeededAccessor.to_json())

# convert the object into a dict
seeded_accessor_dict = seeded_accessor_instance.to_dict()
# create an instance of SeededAccessor from a dict
seeded_accessor_form_dict = seeded_accessor.from_dict(seeded_accessor_dict)
```


