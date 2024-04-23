---
title: TLPCodeFragmentDescription | Python SDK
---

# TLPCodeFragmentDescription

Model for ML big query Code Description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | This is the stringified json of a TLPDescription object | [optional] 
**asset** | **str** | This is the asset id. | 
**created** | **str** | timestamp of creation | 
**model** | **str** | this is the model version | 
**latency** | **float** | the time it takes to run this model. | [optional] 
**user** | **str** | the uuid of the user the description was created for. | 
**context** | **str** | the application this description was created from. | [optional] 
**os** | **str** | This is the UUID of the OS that this context is currently connected to. | [optional] 


