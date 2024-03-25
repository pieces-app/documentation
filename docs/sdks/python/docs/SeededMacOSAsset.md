# SeededMacOSAsset

An Seeded Asset specific to MacOS which takes in a Value, and Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | [**Application**](Application) |  | [optional] 
**value** | **str** | The value of the text that you want to save as an asset. | 

## Example

```python
from pieces_os_client.models.seeded_mac_os_asset import SeededMacOSAsset

# TODO update the JSON string below
json = "{}"
# create an instance of SeededMacOSAsset from a JSON string
seeded_mac_os_asset_instance = SeededMacOSAsset.from_json(json)
# print the JSON string representation of the object
print SeededMacOSAsset.to_json()

# convert the object into a dict
seeded_mac_os_asset_dict = seeded_mac_os_asset_instance.to_dict()
# create an instance of SeededMacOSAsset from a dict
seeded_mac_os_asset_form_dict = seeded_mac_os_asset.from_dict(seeded_mac_os_asset_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


