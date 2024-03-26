# CheckedOSUpdate

This is the returnable for /os/update/check

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**status** | [**UpdatingStatusEnum**](UpdatingStatusEnum) |  | 

## Example

```python
from pieces_os_client.models.checked_os_update import CheckedOSUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CheckedOSUpdate from a JSON string
checked_os_update_instance = CheckedOSUpdate.from_json(json)
# print the JSON string representation of the object
print CheckedOSUpdate.to_json()

# convert the object into a dict
checked_os_update_dict = checked_os_update_instance.to_dict()
# create an instance of CheckedOSUpdate from a dict
checked_os_update_form_dict = checked_os_update.from_dict(checked_os_update_dict)
```



