# OSDeviceCPUHardwareInformation

This will let us know specific hardware information related to the CPU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | **str** |  | [optional] 
**memory** | **float** |  | [optional] 

## Example

```python
from pieces_os_client.models.os_device_cpu_hardware_information import OSDeviceCPUHardwareInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OSDeviceCPUHardwareInformation from a JSON string
os_device_cpu_hardware_information_instance = OSDeviceCPUHardwareInformation.from_json(json)
# print the JSON string representation of the object
print(OSDeviceCPUHardwareInformation.to_json())

# convert the object into a dict
os_device_cpu_hardware_information_dict = os_device_cpu_hardware_information_instance.to_dict()
# create an instance of OSDeviceCPUHardwareInformation from a dict
os_device_cpu_hardware_information_form_dict = os_device_cpu_hardware_information.from_dict(os_device_cpu_hardware_information_dict)
```


