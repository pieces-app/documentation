# SystemExecutionCpuInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | this is the number of cpus | 
**brand** | **str** | this is the brand of cpu | 
**frequency** | **int** |  | 

## Example

```python
from pieces_os_client.models.system_execution_cpu_information import SystemExecutionCpuInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SystemExecutionCpuInformation from a JSON string
system_execution_cpu_information_instance = SystemExecutionCpuInformation.from_json(json)
# print the JSON string representation of the object
print SystemExecutionCpuInformation.to_json()

# convert the object into a dict
system_execution_cpu_information_dict = system_execution_cpu_information_instance.to_dict()
# create an instance of SystemExecutionCpuInformation from a dict
system_execution_cpu_information_form_dict = system_execution_cpu_information.from_dict(system_execution_cpu_information_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


