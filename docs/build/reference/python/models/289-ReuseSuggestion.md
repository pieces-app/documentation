---
title: ReuseSuggestion | Python SDK
---

# ReuseSuggestion

This is the ReuseSuggestion. Mainly creating an additional model here because I imagine that we will want to add some additional data to this in the future (potentially with more numerical data that is emitted from the ML Models)  **Note: suggested is required here because we will want to say if we suggested to take this action of reuse or not.  ** Thoughts here. We could potentially return Assets: which would be an iterable of assets in most relavent order for the user to reuse if they want.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**suggested** | **bool** | This is a boolean, that will say if you should or should not take action. | 
**assets** | [**Assets**](Assets) |  | 


