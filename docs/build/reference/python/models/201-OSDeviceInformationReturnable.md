# OSDeviceInformationReturnable

This is the returnable model for the /os/device/information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**dependencies** | [**OSDeviceDependenciesInformation**](OSDeviceDependenciesInformation) |  | [optional] 
**name** | **str** | this is the name of the device | [optional] 
**version** | **str** | this is the version of the device | [optional] 
**hardware** | [**OSDeviceHardwareInformation**](OSDeviceHardwareInformation) |  | [optional] 

## Example

```python
from pieces_os_client.models.os_device_information_returnable import OSDeviceInformationReturnable

# TODO update the JSON string below
json = "{}"
# create an instance of OSDeviceInformationReturnable from a JSON string
os_device_information_returnable_instance = OSDeviceInformationReturnable.from_json(json)
# print the JSON string representation of the object
print(OSDeviceInformationReturnable.to_json())

# convert the object into a dict
os_device_information_returnable_dict = os_device_information_returnable_instance.to_dict()
# create an instance of OSDeviceInformationReturnable from a dict
os_device_information_returnable_form_dict = os_device_information_returnable.from_dict(os_device_information_returnable_dict)
```



