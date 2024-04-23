---
title: RelevantQGPTSeed | TypeScript SDK
---


# RelevantQGPTSeed

This is a generic model used, to wrap a seed, as well as give an identifier used to further identifiy this snippet.  Seed is optional here because you may just want to provide the id, and not the original seed.  id is also optional here as you may provide an id or not here.(however with specific endpoint this ID is a guarentee.)

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**seed** | [**Seed**](Seed)
**path** | **string**
**asset** | [**ReferencedAsset**](ReferencedAsset)


