---
title: Context | Kotlin SDK
---



# Context

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os** | **kotlin.String** | This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment&#39;s anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os | 
**application** | [**Application**](Application) |  | 
**health** | [**Health**](Health) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**user** | [**UserProfile**](UserProfile) |  |  [optional]




