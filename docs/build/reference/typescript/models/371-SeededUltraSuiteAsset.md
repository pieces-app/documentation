---
title: SeededUltraSuiteAsset | TypeScript SDK
---


# SeededUltraSuiteAsset

A SeededUEAsset is the minimum data sent from UE required to create an asset within Pieces.  Fragment & file are both optional properties however we will throw an internal error if both fragment and file are passed through or if both are undefined.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**name** | **string**
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum)
**format** | [**SeededFormat**](SeededFormat)
**description** | **string**


