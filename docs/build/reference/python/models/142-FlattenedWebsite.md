---
title: FlattenedWebsite | Python SDK
---

# FlattenedWebsite

This is a specific model for related websites to an asset.[DAG SAFE]

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | this is aspecific uuid that represents | 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**name** | **str** | A customizable name. | 
**url** | **str** | The true url or the website. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanisms** | [**Dict[str, MechanismEnum]**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] 
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 


