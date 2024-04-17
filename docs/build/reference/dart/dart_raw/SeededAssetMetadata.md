---
title: core_openapi.model.SeededAssetMetadata | Dart SDK
---

# core_openapi.model.SeededAssetMetadata

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**name** | **String** | This is the name of the asset. | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum.md) |  | [optional] 
**tags** | [**List<SeededAssetTag>**](SeededAssetTag.md) | (optional) can add some tags to associate to this asset. | [optional] [default to const []]
**websites** | [**List<SeededAssetWebsite>**](SeededAssetWebsite.md) |  | [optional] [default to const []]
**sensitives** | [**List<SeededAssetSensitive>**](SeededAssetSensitive.md) |  | [optional] [default to const []]
**persons** | [**List<SeededPerson>**](SeededPerson.md) |  | [optional] [default to const []]
**annotations** | [**List<SeededAnnotation>**](SeededAnnotation.md) |  | [optional] [default to const []]
**hints** | [**List<SeededHint>**](SeededHint.md) |  | [optional] [default to const []]
**anchors** | [**List<SeededAnchor>**](SeededAnchor.md) |  | [optional] [default to const []]

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


