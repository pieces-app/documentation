---
title: FlattenedFormat | TypeScript SDK
---


# FlattenedFormat

A representation of Data for a particular Form Factor of an Asset.[DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects.  i.e. FlattenedFormat.asset is Type String  fragment or file will always be defined. Even thought they are both optional.

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
**asset** | **string**
**bytes** | [**ByteDescriptor**](ByteDescriptor)
**created** | [**GroupedTimestamp**](GroupedTimestamp)
**updated** | [**GroupedTimestamp**](GroupedTimestamp)
**deleted** | [**GroupedTimestamp**](GroupedTimestamp)
**synced** | [**GroupedTimestamp**](GroupedTimestamp)
**cloud** | **string**
**fragment** | [**FragmentFormat**](FragmentFormat)
**file** | [**FileFormat**](FileFormat)
**analysis** | [**FlattenedAnalysis**](FlattenedAnalysis)
**relationship** | [**Relationship**](Relationship)
**activities** | [**FlattenedActivities**](FlattenedActivities)


