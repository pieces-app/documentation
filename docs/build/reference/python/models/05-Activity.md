---
title: Activity | Python SDK
---

# Activity

consider a rename to Event? That being said if we go with event we need to think about a word to pre/post fix event because it is likely to be a reserved word.  additional documentation: https://www.notion.so/getpieces/Activity-4da8de193733441f85f87b510235fb74   Notes: - user/asset/format are all optional, NOT required that one of these are present. - if mechanism == internal we will not display to the user.  Thoughts around additional properties. - hmm dismissed array here, that is an array of strings, where the string is the userId that dismissed this notification? or we could potentially do it based on the os_ID. - 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | [optional] 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 
**format** | [**FlattenedFormat**](FlattenedFormat) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**rank** | **int** | This is the numeric value assigned for this activity event. This number is based off the the type of activity event calcaulated on the server side.DO NOT MODIFY. To see what the value qualilates to, please refer to the function within the common sdk. The number here is based on the fib series. from 0 -&gt; infinity but rn there arnt any value over 8. | [optional] 


