---
title: Backups | Python SDK
---

# Backups

This is a plural model of many Cloud Backups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Backup]**](Backup) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an website id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.backups import Backups

# TODO update the JSON string below
json = "{}"
# create an instance of Backups from a JSON string
backups_instance = Backups.from_json(json)
# print the JSON string representation of the object
print(Backups.to_json())

# convert the object into a dict
backups_dict = backups_instance.to_dict()
# create an instance of Backups from a dict
backups_form_dict = backups.from_dict(backups_dict)
```


