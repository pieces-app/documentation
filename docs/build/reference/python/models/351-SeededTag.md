---
title: SeededTag | Python SDK
---

# SeededTag

This is the minimum information needed when creating a Tag.  Default we will attach manual to a tag unless otherwise specified for mechanism.  you can optionally add an asset, format, or person uuid to attach this tag directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | This is the description of the tag. | 
**asset** | **str** | this is a uuid that references an asset. | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 
**person** | **str** | uuid of the person, you want to add this tag too | [optional] 


