# LinkifyMultiple Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets** | **List\<String\>** | This is an array or string that represents an already backed up asset. That will be added to a collection. | [default to const []]
**users** | [**List\<SeededUser\>**](SeededUser) | this is an array of users. | [optional] [default to const []]
**access** | [**AccessEnum**](AccessEnum) |  | 
**name** | **String** | optionally can give the collection a name if you want. | [optional] 




