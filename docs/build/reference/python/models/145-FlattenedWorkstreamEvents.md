---
title: FlattenedWorkstreamEvents | Python SDK
---

# FlattenedWorkstreamEvents

This is a plural (DAG Safe) version of a WorkstreamEvents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedWorkstreamEvent]**](ReferencedWorkstreamEvent) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an activity id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 


