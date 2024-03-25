# AllocationCloudStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**cloud** | [**AllocationStatusEnum**](AllocationStatusEnum) |  | 

## Example

```python
from pieces_os_client.models.allocation_cloud_status import AllocationCloudStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AllocationCloudStatus from a JSON string
allocation_cloud_status_instance = AllocationCloudStatus.from_json(json)
# print the JSON string representation of the object
print AllocationCloudStatus.to_json()

# convert the object into a dict
allocation_cloud_status_dict = allocation_cloud_status_instance.to_dict()
# create an instance of AllocationCloudStatus from a dict
allocation_cloud_status_form_dict = allocation_cloud_status.from_dict(allocation_cloud_status_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


