---
title: WorkstreamPatternEngineVisionStatus | Python SDK
---

# WorkstreamPatternEngineVisionStatus

activation: can be active for forever w/ continous true, or it can be activated for the next couple hours  deactivation: here can be deactivated for forever w/ continuous true, or it can be deactivated for the next couple hours  Note: one or the other will be set and both are nullable.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**activation** | [**AnonymousTemporalRange**](AnonymousTemporalRange) |  | [optional] 
**deactivation** | [**AnonymousTemporalRange**](AnonymousTemporalRange) |  | [optional] 


