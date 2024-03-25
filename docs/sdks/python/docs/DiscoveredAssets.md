# DiscoveredAssets

This is a plural Model that is used within the bulk upload flow in both cases of a file(&& needing snippitization) as well as if the fragments are passed in and they only need to be clustered.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **str** | application id. | 
**iterable** | [**List[DiscoveredAsset]**](DiscoveredAsset) | This is an iterable of already snippitized snippets that have been clustered.(These are assets that are going to be uploaded or at minimum the assets that we reccommend to upload) | 

## Example

```python
from pieces_os_client.models.discovered_assets import DiscoveredAssets

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredAssets from a JSON string
discovered_assets_instance = DiscoveredAssets.from_json(json)
# print the JSON string representation of the object
print DiscoveredAssets.to_json()

# convert the object into a dict
discovered_assets_dict = discovered_assets_instance.to_dict()
# create an instance of DiscoveredAssets from a dict
discovered_assets_form_dict = discovered_assets.from_dict(discovered_assets_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


