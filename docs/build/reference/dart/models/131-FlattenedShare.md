# FlattenedShare Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | This references the share it self. | 
**asset** | **String** | this is the asset id on the flattened share. | [optional] 
**user** | **String** | this is the uuid of the user that the share is created for. | [optional] 
**link** | **String** | this is the prebuilt link. | 
**access** | [**AccessEnum**](AccessEnum) |  | 
**accessors** | [**Accessors**](Accessors) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**short** | **String** | This is a shortened version of our uuid. | 
**name** | **String** |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**distributions** | [**FlattenedDistributions**](FlattenedDistributions) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 




