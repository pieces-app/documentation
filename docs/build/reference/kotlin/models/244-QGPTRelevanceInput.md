---
title: QGPTRelevanceInput | Kotlin SDK
---



# QGPTRelevanceInput

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **kotlin.String** | This is the question that the user is asking. | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**paths** | **kotlin.collections.List&lt;kotlin.String&gt;** | This is an optional list of file || folder paths. |  [optional]
**seeds** | [**Seeds**](Seeds) |  |  [optional]
**assets** | [**FlattenedAssets**](FlattenedAssets) |  |  [optional]
**messages** | [**FlattenedConversationMessages**](FlattenedConversationMessages) |  |  [optional]
**options** | [**QGPTRelevanceInputOptions**](QGPTRelevanceInputOptions) |  |  [optional]
**application** | **kotlin.String** | optional application id |  [optional]
**model** | **kotlin.String** | optional model id |  [optional]
**temporal** | [**TemporalRangeGrounding**](TemporalRangeGrounding) |  |  [optional]




