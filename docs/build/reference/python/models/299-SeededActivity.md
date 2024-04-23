---
title: SeededActivity | Python SDK
---

# SeededActivity

This is the preseed to a full blown Activity.  This is the minimum information needed to create an Activity, used within our [POST] /activities/create  if mechenism is not passed in we will default to AUTOMATIC  NOT required to pass in an asset/user/format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**user** | [**ReferencedUser**](ReferencedUser) |  | [optional] 
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 


