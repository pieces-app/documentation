---
title: WorkstreamPatternEngineDataCleanupRequest | Python SDK
---

# WorkstreamPatternEngineDataCleanupRequest

NOTE: if we want to remove all the data the from would be unset, the to will be right now.  from: is always in the past to: is always at least before from in our time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ranges** | [**List[AnonymousTemporalRange]**](AnonymousTemporalRange) |  | [optional] 


