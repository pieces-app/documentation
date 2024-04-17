---
title: core_openapi.model.Auth0UserMetadata | Dart SDK
---

# core_openapi.model.Auth0UserMetadata

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema.md) |  | [optional] 
**globalId** | **String** |  | 
**cloudKey** | **String** |  | [optional] 
**stripeCustomerId** | **String** | A customer ID that is added to the user in the case of payments | [optional] 
**vanityname** | **String** | this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where \"mark\" is the vanityname. | [optional] 
**allocation** | [**Auth0UserAllocationMetadata**](Auth0UserAllocationMetadata.md) |  | [optional] 
**openAI** | [**Auth0OpenAIUserMetadata**](Auth0OpenAIUserMetadata.md) |  | [optional] 
**beta** | [**AnonymousTemporalRange**](AnonymousTemporalRange.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


