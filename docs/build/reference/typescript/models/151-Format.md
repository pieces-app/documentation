---
title: Format | TypeScript SDK
---


# Format

A representation of Data for a particular Form Factor of an Asset.  Below asset HAS to be Flattened because it is a leaf node and must prevent cycles agressively.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**creator** | **string**
**classification** | [**Classification**](Classification)
**icon** | **string**
**role** | [**Role**](Role)
**application** | [**Application**](Application)
**asset** | [**FlattenedAsset**](FlattenedAsset)
**bytes** | [**ByteDescriptor**](ByteDescriptor)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**cloud** | **string**
**fragment** | [**FragmentFormat**](FragmentFormat)
**file** | [**FileFormat**](FileFormat)
**analysis** | [**Analysis**](Analysis)
**relationship** | [**Relationship**](Relationship)
**activities** | [**Activities**](Activities)


