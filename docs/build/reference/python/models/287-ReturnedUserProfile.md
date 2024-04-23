---
title: ReturnedUserProfile | Python SDK
---

# ReturnedUserProfile

This is a modle strictly for the purpose that when calling '/user' and other user related endpoints the UserProfile could potentially be null, so we needed a model to do that.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**user** | [**UserProfile**](UserProfile) |  | [optional] 


