---
title: SeededTrackedAssetEvent | TypeScript SDK
---


# SeededTrackedAssetEvent

This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**asset** | [**ReferencedAsset**](ReferencedAsset)
**identifierDescriptionPair** | [**TrackedAssetEventIdentifierDescriptionPairs**](TrackedAssetEventIdentifierDescriptionPairs)
**metadata** | [**TrackedAssetEventMetadata**](TrackedAssetEventMetadata)


