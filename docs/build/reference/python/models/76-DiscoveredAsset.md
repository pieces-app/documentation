# DiscoveredAsset



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**file** | [**SeededFile**](SeededFile) |  | [optional] 
**fragment** | [**SeededFragment**](SeededFragment) |  | [optional] 
**directory** | **str** |  | [optional] 
**metadata** | [**SeededAssetMetadata**](SeededAssetMetadata) |  | [optional] 
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] 

## Example

```python
from pieces_os_client.models.discovered_asset import DiscoveredAsset

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredAsset from a JSON string
discovered_asset_instance = DiscoveredAsset.from_json(json)
# print the JSON string representation of the object
print(DiscoveredAsset.to_json())

# convert the object into a dict
discovered_asset_dict = discovered_asset_instance.to_dict()
# create an instance of DiscoveredAsset from a dict
discovered_asset_form_dict = discovered_asset.from_dict(discovered_asset_dict)
```


