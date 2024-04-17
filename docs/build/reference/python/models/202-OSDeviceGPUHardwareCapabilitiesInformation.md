---
title: OSDeviceGPUHardwareCapabilitiesInformation | Python SDK
---

# OSDeviceGPUHardwareCapabilitiesInformation

This will give specific information on task specific capibilites for GPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**llm** | **bool** | This will let us know if in the case we have a gpu and our gpu has the capabilities to use llms | [optional] 

## Example

```python
from pieces_os_client.models.os_device_gpu_hardware_capabilities_information import OSDeviceGPUHardwareCapabilitiesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OSDeviceGPUHardwareCapabilitiesInformation from a JSON string
os_device_gpu_hardware_capabilities_information_instance = OSDeviceGPUHardwareCapabilitiesInformation.from_json(json)
# print the JSON string representation of the object
print(OSDeviceGPUHardwareCapabilitiesInformation.to_json())

# convert the object into a dict
os_device_gpu_hardware_capabilities_information_dict = os_device_gpu_hardware_capabilities_information_instance.to_dict()
# create an instance of OSDeviceGPUHardwareCapabilitiesInformation from a dict
os_device_gpu_hardware_capabilities_information_form_dict = os_device_gpu_hardware_capabilities_information.from_dict(os_device_gpu_hardware_capabilities_information_dict)
```


