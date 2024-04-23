---
title: Suggestion | TypeScript SDK
---


# Suggestion

This is the model return by the connector\'s suggest endpoint.  Note: assets are the assets that this target was ran against.  distribution is the distribution that we generated from comparing the target to the asset\'s vectors.(currently uuid(assetid) : value that is the difference between the asset and the target) **could potentially make an additional model here that is an array from most to least relevent.  *** distribution is required but we are currently unable to reflect that with our current dart generation.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**reuse** | [**ReuseSuggestion**](ReuseSuggestion)
**save** | [**SaveSuggestion**](SaveSuggestion)
**target** | [**SuggestionTarget**](SuggestionTarget)
**assets** | [**Assets**](Assets)
**distribution** | **\{ [key: string]: number; \}**


