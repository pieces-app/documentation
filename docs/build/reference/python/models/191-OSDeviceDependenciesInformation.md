# OSDeviceDependenciesInformation

This will lets us know about specific dependencies that we are looking for on the device that are needed for specific tasks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**vulkan** | **bool** | This will let us know if vulkan is present &#x3D; true or not there &#x3D;&#x3D;false | 

## Example

```python
from pieces_os_client.models.os_device_dependencies_information import OSDeviceDependenciesInformation

# TODO update the JSON string below
json = "{}"
# create an instance of OSDeviceDependenciesInformation from a JSON string
os_device_dependencies_information_instance = OSDeviceDependenciesInformation.from_json(json)
# print the JSON string representation of the object
print OSDeviceDependenciesInformation.to_json()

# convert the object into a dict
os_device_dependencies_information_dict = os_device_dependencies_information_instance.to_dict()
# create an instance of OSDeviceDependenciesInformation from a dict
os_device_dependencies_information_form_dict = os_device_dependencies_information.from_dict(os_device_dependencies_information_dict)
```



