---
title: OSDeviceHardwareInformation | Python SDK
---

# OSDeviceHardwareInformation

this will let us know specific hardware information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**cpu** | [**OSDeviceCPUHardwareInformation**](OSDeviceCPUHardwareInformation) |  | [optional] 
**gpu** | [**OSDeviceGPUHardwareInformation**](OSDeviceGPUHardwareInformation) |  | [optional] 

## Example

```python
from pieces_os_client.models.os_device_hardware_information import OSDeviceHardwareInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OSDeviceHardwareInformation from a JSON string
os_device_hardware_information_instance = OSDeviceHardwareInformation.from_json(json)
# print the JSON string representation of the object
print(OSDeviceHardwareInformation.to_json())

# convert the object into a dict
os_device_hardware_information_dict = os_device_hardware_information_instance.to_dict()
# create an instance of OSDeviceHardwareInformation from a dict
os_device_hardware_information_form_dict = os_device_hardware_information.from_dict(os_device_hardware_information_dict)
```


