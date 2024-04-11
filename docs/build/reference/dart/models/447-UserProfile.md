# UserProfile Model

## Load the model package
```dart
import 'package:core_openapi/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**picture** | **String** | mapped from picture.URL pointing to the user's profile picture.  | [optional] [default to 'https://picsum.photos/200']
**email** | **String** |  | [optional] [default to 'user@pieces.app']
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**username** | **String** |  (unique) User's username.   | [optional] 
**id** | **String** |  | 
**name** | **String** | This is the name of the User. | [optional] 
**aesthetics** | [**Aesthetics**](Aesthetics) |  | 
**vanityname** | **String** |  | [optional] 
**allocation** | [**AllocationCloud**](AllocationCloud) |  | [optional] 
**providers** | [**ExternalProviders**](ExternalProviders) |  | [optional] 
**auth0** | [**Auth0UserMetadata**](Auth0UserMetadata) |  | [optional] 




