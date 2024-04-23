---
title: SeededDiscoverableRelatedTag | Python SDK
---

# SeededDiscoverableRelatedTag



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | This is the description of the tag. | 
**asset** | **str** | this is a uuid that references an asset. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**format** | **str** | (optionally) you can attach a tag to a format. so when you delete a format this tag will get removed from the asset as well. | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 


