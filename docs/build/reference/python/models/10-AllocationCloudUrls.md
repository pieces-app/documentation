# AllocationCloudUrls

you will have at minimum 2 urls,  base: is the default url of your cloud.  id: is the branded url, uuid.pieces.cloud.  (optional) vanity: is the custom branded url, mark.pieces.cloud

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**base** | [**AllocationCloudUrl**](AllocationCloudUrl) |  | 
**id** | [**AllocationCloudUrl**](AllocationCloudUrl) |  | 
**vanity** | [**AllocationCloudUrl**](AllocationCloudUrl) |  | [optional] 

## Example

```python
from pieces_os_client.models.allocation_cloud_urls import AllocationCloudUrls

# TODO update the JSON string below
json = "{}"
# create an instance of AllocationCloudUrls from a JSON string
allocation_cloud_urls_instance = AllocationCloudUrls.from_json(json)
# print the JSON string representation of the object
print(AllocationCloudUrls.to_json())

# convert the object into a dict
allocation_cloud_urls_dict = allocation_cloud_urls_instance.to_dict()
# create an instance of AllocationCloudUrls from a dict
allocation_cloud_urls_form_dict = allocation_cloud_urls.from_dict(allocation_cloud_urls_dict)
```



