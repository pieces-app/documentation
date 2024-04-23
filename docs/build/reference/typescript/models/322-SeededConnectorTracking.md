---
title: SeededConnectorTracking | TypeScript SDK
---


# SeededConnectorTracking

This model is designed to be light weight and low friction while most of the heavy lifting will be happening inside of the context servers.  This Model is important because this has references to our materials, instead of fully referenced materials.(very similar to our SeededTrackedEvent, consider consolidating and converting these to Referenced models instead of ID\'s)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**format** | [**SeededTrackedFormatEvent**](SeededTrackedFormatEvent)
**asset** | [**SeededTrackedAssetEvent**](SeededTrackedAssetEvent)
**interaction** | [**SeededTrackedInteractionEvent**](SeededTrackedInteractionEvent)
**keyboard** | [**SeededTrackedKeyboardEvent**](SeededTrackedKeyboardEvent)
**session** | [**SeededTrackedSessionEvent**](SeededTrackedSessionEvent)
**assets** | [**SeededTrackedAssetsEvent**](SeededTrackedAssetsEvent)
**ml** | [**SeededTrackedMachineLearningEvent**](SeededTrackedMachineLearningEvent)
**adoption** | [**SeededTrackedAdoptionEvent**](SeededTrackedAdoptionEvent)
**conversation** | [**SeededTrackedConversationEvent**](SeededTrackedConversationEvent)


