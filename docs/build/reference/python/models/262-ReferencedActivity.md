---
title: ReferencedActivity | Python SDK
---

# ReferencedActivity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedActivity**](FlattenedActivity) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_activity import ReferencedActivity

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedActivity from a JSON string
referenced_activity_instance = ReferencedActivity.from_json(json)
# print the JSON string representation of the object
print(ReferencedActivity.to_json())

# convert the object into a dict
referenced_activity_dict = referenced_activity_instance.to_dict()
# create an instance of ReferencedActivity from a dict
referenced_activity_form_dict = referenced_activity.from_dict(referenced_activity_dict)
```


