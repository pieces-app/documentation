# Format Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**creator** | **String** |  | 
**classification** | [**Classification**](Classification) |  | 
**icon** | **String** |  | [optional] 
**role** | [**Role**](Role) |  | 
**application** | [**Application**](Application) |  | 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**synced** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**cloud** | **String** | This is a path used to determine what path this format lives at within the cloud. | [optional] 
**fragment** | [**FragmentFormat**](FragmentFormat) |  | [optional] 
**file** | [**FileFormat**](FileFormat) |  | [optional] 
**analysis** | [**Analysis**](Analysis) |  | [optional] 
**relationship** | [**Relationship**](Relationship) |  | [optional] 
**activities** | [**Activities**](Activities) |  | [optional] 




