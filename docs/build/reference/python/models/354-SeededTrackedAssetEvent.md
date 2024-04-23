---
title: SeededTrackedAssetEvent | Python SDK
---

# SeededTrackedAssetEvent

This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | 
**identifier_description_pair** | [**TrackedAssetEventIdentifierDescriptionPairs**](TrackedAssetEventIdentifierDescriptionPairs) |  | 
**metadata** | [**TrackedAssetEventMetadata**](TrackedAssetEventMetadata) |  | [optional] 


