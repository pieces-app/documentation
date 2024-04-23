---
title: SeededActivity | TypeScript SDK
---


# SeededActivity

This is the preseed to a full blown Activity.  This is the minimum information needed to create an Activity, used within our [POST] /activities/create  if mechenism is not passed in we will default to AUTOMATIC  NOT required to pass in an asset/user/format.

## Properties

Name | Type
------------ | -------------
**event** | [**SeededConnectorTracking**](SeededConnectorTracking)
**application** | [**Application**](Application)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**user** | [**ReferencedUser**](ReferencedUser)
**format** | [**ReferencedFormat**](ReferencedFormat)
**mechanism** | [**MechanismEnum**](MechanismEnum)
**conversation** | [**ReferencedConversation**](ReferencedConversation)


