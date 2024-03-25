# Auth0UserAllocationMetadata

This is specifically for our allocation server metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | **str** |  | 
**region** | **str** |  | 

## Example

```python
from pieces_os_client.models.auth0_user_allocation_metadata import Auth0UserAllocationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0UserAllocationMetadata from a JSON string
auth0_user_allocation_metadata_instance = Auth0UserAllocationMetadata.from_json(json)
# print the JSON string representation of the object
print Auth0UserAllocationMetadata.to_json()

# convert the object into a dict
auth0_user_allocation_metadata_dict = auth0_user_allocation_metadata_instance.to_dict()
# create an instance of Auth0UserAllocationMetadata from a dict
auth0_user_allocation_metadata_form_dict = auth0_user_allocation_metadata.from_dict(auth0_user_allocation_metadata_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


