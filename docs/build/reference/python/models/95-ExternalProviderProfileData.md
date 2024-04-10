# ExternalProviderProfileData

All of these will be optional.  Will support ProfileData from all our social providers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**picture** | **str** |  | [optional] 
**nickname** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**email_verified** | **bool** |  | [optional] 
**node_id** | **str** |  | [optional] 
**gravatar_id** | **str** |  | [optional] 
**url** | **str** |  | [optional] 
**html_url** | **str** |  | [optional] 
**followers_url** | **str** |  | [optional] 
**following_url** | **str** |  | [optional] 
**gists_url** | **str** |  | [optional] 
**starred_url** | **str** |  | [optional] 
**subscriptions_url** | **str** |  | [optional] 
**organizations_url** | **str** |  | [optional] 
**repos_url** | **str** |  | [optional] 
**events_url** | **str** |  | [optional] 
**received_events_url** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**site_admin** | **bool** |  | [optional] 
**company** | **str** |  | [optional] 
**blog** | **str** |  | [optional] 
**anchor** | **str** |  | [optional] 
**hireable** | **bool** |  | [optional] 
**bio** | **str** |  | [optional] 
**twitter_username** | **str** |  | [optional] 
**public_repos** | **int** |  | [optional] 
**public_gists** | **int** |  | [optional] 
**followers** | **int** |  | [optional] 
**following** | **int** |  | [optional] 
**created_at** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 
**private_gists** | **int** |  | [optional] 
**total_private_repos** | **int** |  | [optional] 
**owned_private_repos** | **int** |  | [optional] 
**disk_usage** | **int** |  | [optional] 
**collaborators** | **int** |  | [optional] 
**two_factor_authentication** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.external_provider_profile_data import ExternalProviderProfileData

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalProviderProfileData from a JSON string
external_provider_profile_data_instance = ExternalProviderProfileData.from_json(json)
# print the JSON string representation of the object
print(ExternalProviderProfileData.to_json())

# convert the object into a dict
external_provider_profile_data_dict = external_provider_profile_data_instance.to_dict()
# create an instance of ExternalProviderProfileData from a dict
external_provider_profile_data_form_dict = external_provider_profile_data.from_dict(external_provider_profile_data_dict)
```


