---
title: AllocationCloud | Python SDK
---

# AllocationCloud

update && version: will be present only if your cloud was successfully spun up && running.  updated: is the last time this was updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | This is a uuid that represents this cloud.(this is the same as the userid) | 
**user** | **str** | this is your useruuid. | 
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls) |  | 
**status** | [**AllocationCloudStatus**](AllocationCloudStatus) |  | 
**project** | **str** | This is the project that this is attached to. | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**version** | **str** | this is the current version of the server. | [optional] 
**region** | **str** | this is the region where the project is defined. | [optional] 


