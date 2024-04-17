---
title: SeededAssetMetadata | Python SDK
---

# SeededAssetMetadata

This is optional metadata sent with the SeededAsset and other SeededAssets ie (UE, Jetbrains...)  Note: if a user/develop didnt explicitly state a mechanism we will default to manual(user Driven only)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | **str** | This is the name of the asset. | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**tags** | [**List[SeededAssetTag]**](SeededAssetTag) | (optional) can add some tags to associate to this asset. | [optional] 
**websites** | [**List[SeededAssetWebsite]**](SeededAssetWebsite) |  | [optional] 
**sensitives** | [**List[SeededAssetSensitive]**](SeededAssetSensitive) |  | [optional] 
**persons** | [**List[SeededPerson]**](SeededPerson) |  | [optional] 
**annotations** | [**List[SeededAnnotation]**](SeededAnnotation) |  | [optional] 
**hints** | [**List[SeededHint]**](SeededHint) |  | [optional] 
**anchors** | [**List[SeededAnchor]**](SeededAnchor) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_asset_metadata import SeededAssetMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetMetadata from a JSON string
seeded_asset_metadata_instance = SeededAssetMetadata.from_json(json)
# print the JSON string representation of the object
print(SeededAssetMetadata.to_json())

# convert the object into a dict
seeded_asset_metadata_dict = seeded_asset_metadata_instance.to_dict()
# create an instance of SeededAssetMetadata from a dict
seeded_asset_metadata_form_dict = seeded_asset_metadata.from_dict(seeded_asset_metadata_dict)
```


