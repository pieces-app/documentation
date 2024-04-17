---
title: AllocationCloud | Python SDK
---

# AllocationCloud

update && version: will be present only if your cloud was successfully spun up && running.  updated: is the last time this was updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | This is a uuid that represents this cloud.(this is the same as the userid) | 
**user** | **str** | this is your useruuid. | 
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls) |  | 
**status** | [**AllocationCloudStatus**](AllocationCloudStatus) |  | 
**project** | **str** | This is the project that this is attached to. | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**version** | **str** | this is the current version of the server. | [optional] 
**region** | **str** | this is the region where the project is defined. | [optional] 

## Example

```python
from pieces_os_client.models.allocation_cloud import AllocationCloud

# TODO update the JSON string below
json = "{}"
# create an instance of AllocationCloud from a JSON string
allocation_cloud_instance = AllocationCloud.from_json(json)
# print the JSON string representation of the object
print(AllocationCloud.to_json())

# convert the object into a dict
allocation_cloud_dict = allocation_cloud_instance.to_dict()
# create an instance of AllocationCloud from a dict
allocation_cloud_form_dict = allocation_cloud.from_dict(allocation_cloud_dict)
```


