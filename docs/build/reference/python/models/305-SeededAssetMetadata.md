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


