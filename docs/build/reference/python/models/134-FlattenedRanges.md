---
title: FlattenedRanges | Python SDK
---

# FlattenedRanges

This is a DAG-Safe minimal representation of many Ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedRange]**](ReferencedRange) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an range id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**continuous** | **bool** |  | [optional] 


