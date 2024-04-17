---
title: SeededAssetMetadata | Dart SDK
---

# SeededAssetMetadata

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | **String** | This is the name of the asset. | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**tags** | [**List\<SeededAssetTag\>**](SeededAssetTag) | (optional) can add some tags to associate to this asset. | [optional] [default to const []]
**websites** | [**List\<SeededAssetWebsite\>**](SeededAssetWebsite) |  | [optional] [default to const []]
**sensitives** | [**List\<SeededAssetSensitive\>**](SeededAssetSensitive) |  | [optional] [default to const []]
**persons** | [**List\<SeededPerson\>**](SeededPerson) |  | [optional] [default to const []]
**annotations** | [**List\<SeededAnnotation\>**](SeededAnnotation) |  | [optional] [default to const []]
**hints** | [**List\<SeededHint\>**](SeededHint) |  | [optional] [default to const []]
**anchors** | [**List\<SeededAnchor\>**](SeededAnchor) |  | [optional] [default to const []]




