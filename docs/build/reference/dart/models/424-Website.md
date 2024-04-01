# Website Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**url** | **String** | this is the actual website url. | 
**name** | **String** | This is a name that is customized. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mechanisms** | [**Map\<String, MechanismEnum\>**](MechanismEnum) | This is a Map\<String, MechanismEnum\>** where the the key is an asset id. | [optional] [default to const {}]
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 




