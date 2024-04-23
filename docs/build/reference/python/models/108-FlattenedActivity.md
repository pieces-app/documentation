---
title: FlattenedActivity | Python SDK
---

# FlattenedActivity

Note: - if mechanism == internal we will not display to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**rank** | **int** |  | [optional] 


