---
title: Context | Python SDK
---

# Context

A Context that is returned from almost all calls to the ContextAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**os** | **str** | This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment&#39;s anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os | 
**application** | [**Application**](Application) |  | 
**health** | [**Health**](Health) |  | 
**user** | [**UserProfile**](UserProfile) |  | [optional] 


