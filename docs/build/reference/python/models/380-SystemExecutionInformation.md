# SystemExecutionInformation

This is system information that we are able to get from the users machine(rust package TBD). TODO potentially pull this out of TLP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**memory** | **int** |  | 
**os** | **str** |  | 
**kernel** | **str** |  | 
**cpu** | [**SystemExecutionCpuInformation**](SystemExecutionCpuInformation) |  | 

## Example

```python
from pieces_os_client.models.system_execution_information import SystemExecutionInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SystemExecutionInformation from a JSON string
system_execution_information_instance = SystemExecutionInformation.from_json(json)
# print the JSON string representation of the object
print(SystemExecutionInformation.to_json())

# convert the object into a dict
system_execution_information_dict = system_execution_information_instance.to_dict()
# create an instance of SystemExecutionInformation from a dict
system_execution_information_form_dict = system_execution_information.from_dict(system_execution_information_dict)
```



