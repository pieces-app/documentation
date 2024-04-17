---
title: Accessor | Python SDK
---

# Accessor

This is used to determine who has accessed a share. and how many times.  The user here is the user that accessed this Piece.(optional) if undefined then this user was not logged in yet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**os** | **str** | this is an os id. | 
**share** | **str** |  | 
**count** | **int** | how many times this user accessed this piece. | 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.accessor import Accessor

# TODO update the JSON string below
json = "{}"
# create an instance of Accessor from a JSON string
accessor_instance = Accessor.from_json(json)
# print the JSON string representation of the object
print(Accessor.to_json())

# convert the object into a dict
accessor_dict = accessor_instance.to_dict()
# create an instance of Accessor from a dict
accessor_form_dict = accessor.from_dict(accessor_dict)
```


