---
title: BackupStatus | Python SDK
---

# BackupStatus

TODO add more description to this.  can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**value** | [**BackupStatusEnum**](BackupStatusEnum) |  | [optional] 
**percentage** | **float** | Optionally if the download is in progress you will receive a download percent(from 0-100). | [optional] 
**backup** | [**Backup**](Backup) |  | 

## Example

```python
from pieces_os_client.models.backup_status import BackupStatus

# TODO update the JSON string below
json = "{}"
# create an instance of BackupStatus from a JSON string
backup_status_instance = BackupStatus.from_json(json)
# print the JSON string representation of the object
print(BackupStatus.to_json())

# convert the object into a dict
backup_status_dict = backup_status_instance.to_dict()
# create an instance of BackupStatus from a dict
backup_status_form_dict = backup_status.from_dict(backup_status_dict)
```


