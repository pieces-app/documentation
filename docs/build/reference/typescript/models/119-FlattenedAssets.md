---
title: FlattenedAssets | TypeScript SDK
---


# FlattenedAssets

A collection of Assets specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedAssets prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. Asset asset = FlattenedAssets.iterable[0] => Format format = asset.preview => String id = format.asset => String id

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**iterable** | [**Array&lt;ReferencedAsset&gt;**](ReferencedAsset)
**indices** | **\{ [key: string]: number; \}**
**score** | [**Score**](Score)


