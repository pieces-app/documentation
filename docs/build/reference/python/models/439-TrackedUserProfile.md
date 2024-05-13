---
title: TrackedUserProfile | Python SDK
---

# TrackedUserProfile

A user that will be passed along with each analytics event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The ID of the user that you are tracking. | 
**username** | **str** | This is a username that is attempted to be assigned but is \&quot;Anonymous User\&quot; by default | [default to 'unknown']
**email** | **str** | The user&#39;s email if we have it. | [optional] 
**granularity** | **str** | At what level is this user being tracked. | [default to 'ANONYMOUS']


