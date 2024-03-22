# SeededAssetWebsite

This is similar to an SeededWebsite, where this is the minimum information of a website, but this can get added to a seededAsset,  where you may not yet have an asset id.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**url** | **str** |  | 
**name** | **str** |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_asset_website import SeededAssetWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetWebsite from a JSON string
seeded_asset_website_instance = SeededAssetWebsite.from_json(json)
# print the JSON string representation of the object
print SeededAssetWebsite.to_json()

# convert the object into a dict
seeded_asset_website_dict = seeded_asset_website_instance.to_dict()
# create an instance of SeededAssetWebsite from a dict
seeded_asset_website_form_dict = seeded_asset_website.from_dict(seeded_asset_website_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


