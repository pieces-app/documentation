# Person

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **String** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**type** | [**PersonType**](PersonType) |  | 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**mechanisms** | [**Map\<String, MechanismEnum\>**](MechanismEnum) | This is a Map\<String, MechanismEnum\>** where the the key is an asset id. | [optional] [default to const {}]
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**access** | [**Map\<String, PersonAccess\>**](PersonAccess) | This is a Map\<String, PersonAccess\>** where the the key is an asset id. | [optional] [default to const {}]
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**models** | [**Map\<String, PersonModel\>**](PersonModel) | This is a Map\<String, PersonModel\>**, where the the key is an asset id. | [optional] [default to const {}]
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 




