# SeededDiscoverableAssets Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **String** | application id. | 
**iterable** | [**List\<SeededDiscoverableAsset\>**](SeededDiscoverableAsset) | This is an iterable of already snippitized snippets that we will compare && cluster. | [default to const []]
**filters** | [**TLPDirectedDiscoveryFilters**](TLPDirectedDiscoveryFilters) |  | [optional] 




