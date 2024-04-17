---
title: SeededDiscoverableAsset | Python SDK
---

# SeededDiscoverableAsset

Assumption: filters applied in this model will overwrite filters passed in SeededDiscoverableAssets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**file** | [**SeededFile**](SeededFile) |  | [optional] 
**fragment** | [**SeededFragment**](SeededFragment) |  | [optional] 
**directory** | **str** |  | [optional] 
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_discoverable_asset import SeededDiscoverableAsset

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableAsset from a JSON string
seeded_discoverable_asset_instance = SeededDiscoverableAsset.from_json(json)
# print the JSON string representation of the object
print(SeededDiscoverableAsset.to_json())

# convert the object into a dict
seeded_discoverable_asset_dict = seeded_discoverable_asset_instance.to_dict()
# create an instance of SeededDiscoverableAsset from a dict
seeded_discoverable_asset_form_dict = seeded_discoverable_asset.from_dict(seeded_discoverable_asset_dict)
```


