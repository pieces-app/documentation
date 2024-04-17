# TrackedApplicationInstall

A model that allows for us to specifically track Application Installs & Related Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | [**TrackedApplication**](TrackedApplication) |  | 
**user** | [**TrackedUserProfile**](TrackedUserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_application_install import TrackedApplicationInstall

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedApplicationInstall from a JSON string
tracked_application_install_instance = TrackedApplicationInstall.from_json(json)
# print the JSON string representation of the object
print(TrackedApplicationInstall.to_json())

# convert the object into a dict
tracked_application_install_dict = tracked_application_install_instance.to_dict()
# create an instance of TrackedApplicationInstall from a dict
tracked_application_install_form_dict = tracked_application_install.from_dict(tracked_application_install_dict)
```


