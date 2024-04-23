---
title: FlattenedPerson | TypeScript SDK
---


# FlattenedPerson

if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...  if asset is passed then that means this person belongs to a scoped asset.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**type** | [**PersonType**](PersonType)
**assets** | [**FlattenedAssets**](FlattenedAssets)
**mechanisms** | [**\{ [key: string]: MechanismEnum; \}**](MechanismEnum)
**interactions** | **number**
**access** | [**\{ [key: string]: PersonAccess; \}**](PersonAccess)
**tags** | [**FlattenedTags**](FlattenedTags)
**websites** | [**FlattenedWebsites**](FlattenedWebsites)
**models** | [**\{ [key: string]: PersonModel; \}**](PersonModel)
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations)
**score** | [**Score**](Score)
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries)


