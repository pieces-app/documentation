---
title: Activity | Kotlin SDK
---



# Activity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  |  [optional]
**asset** | [**FlattenedAsset**](FlattenedAsset) |  |  [optional]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  |  [optional]
**format** | [**FlattenedFormat**](FlattenedFormat) |  |  [optional]
**rank** | **kotlin.Int** | This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -&gt; infinity but rn there arnt any value over 8. |  [optional]




