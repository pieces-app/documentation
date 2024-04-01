# AllocationCloud Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** | This is a uuid that represents this cloud.(this is the same as the userid) | 
**user** | **String** | this is your useruuid. | 
**urls** | [**AllocationCloudUrls**](AllocationCloudUrls) |  | 
**status** | [**AllocationCloudStatus**](AllocationCloudStatus) |  | 
**project** | **String** | This is the project that this is attached to. | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**version** | **String** | this is the current version of the server. | [optional] 
**region** | **String** | this is the region where the project is defined. | [optional] 




