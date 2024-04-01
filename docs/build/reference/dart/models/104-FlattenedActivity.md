# FlattenedActivity Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**rank** | **int** |  | [optional] 




