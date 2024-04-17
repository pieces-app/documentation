---
title: AllocationCloud | Kotlin SDK
---


# AllocationCloud

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** | This is a uuid that represents this cloud.(this is the same as the userid) | 
**user** | **kotlin.String** | this is your useruuid. | 
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls) |  | 
**status** | [**AllocationCloudStatus**](AllocationCloudStatus) |  | 
**project** | **kotlin.String** | This is the project that this is attached to. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**version** | **kotlin.String** | this is the current version of the server. |  [optional]
**region** | **kotlin.String** | this is the region where the project is defined. |  [optional]



