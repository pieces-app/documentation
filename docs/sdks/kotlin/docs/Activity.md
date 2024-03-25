
# Activity

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **kotlin.String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp.md) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking.md) |  | 
**application** | [**Application**](Application.md) |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | 
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  |  [optional]
**deleted** | [**GroupedTimestamp**](GroupedTimestamp.md) |  |  [optional]
**asset** | [**FlattenedAsset**](FlattenedAsset.md) |  |  [optional]
**user** | [**FlattenedUserProfile**](FlattenedUserProfile.md) |  |  [optional]
**format** | [**FlattenedFormat**](FlattenedFormat.md) |  |  [optional]
**rank** | **kotlin.Int** | This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -&gt; infinity but rn there arnt any value over 8. |  [optional]



