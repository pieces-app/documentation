---
title: FlattenedWebsite | Dart SDK
---

# FlattenedWebsite

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | this is aspecific uuid that represents | 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**name** | **String** | A customizable name. | 
**url** | **String** | The true url or the website. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanisms** | [**Map\<String, MechanismEnum\>**](MechanismEnum) | This is a Map\<String, MechanismEnum\>** where the the key is an asset id. | [optional] [default to const {}]
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 




