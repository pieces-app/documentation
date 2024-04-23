---
title: SeededConnectorTracking | Python SDK
---

# SeededConnectorTracking

This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.  This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID's)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**format** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent) |  | [optional] 
**asset** | [**SeededTrackedAssetEvent**](SeededTrackedAssetEvent) |  | [optional] 
**interaction** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent) |  | [optional] 
**keyboard** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent) |  | [optional] 
**session** | [**SeededTrackedSessionEvent**](SeededTrackedSessionEvent) |  | [optional] 
**assets** | [**SeededTrackedAssetsEvent**](SeededTrackedAssetsEvent) |  | [optional] 
**ml** | [**SeededTrackedMachineLearningEvent**](SeededTrackedMachineLearningEvent) |  | [optional] 
**adoption** | [**SeededTrackedAdoptionEvent**](SeededTrackedAdoptionEvent) |  | [optional] 
**conversation** | [**SeededTrackedConversationEvent**](SeededTrackedConversationEvent) |  | [optional] 


