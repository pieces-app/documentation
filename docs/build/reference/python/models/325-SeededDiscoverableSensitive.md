---
title: SeededDiscoverableSensitive | Python SDK
---

# SeededDiscoverableSensitive

This is the SeededDiscoverableSensitive, this has every property that the seededSensitive has except this one is all optionally passed in. and will override our classification if provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**text** | **str** | this is the string representative of the sensative piece of data. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | [optional] 
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] 


