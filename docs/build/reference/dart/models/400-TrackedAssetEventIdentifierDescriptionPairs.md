# TrackedAssetEventIdentifierDescriptionPairs Model

## Load the model package
```dart
import 'package:pieces_os_client/api.dart';
```

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assetCreated** | **String** | The key value pair for an asset being created. | [optional] 
**assetViewed** | **String** | An asset was viewed | [optional] 
**assetFormatCopied** | **String** | An asset's format was copied | [optional] 
**assetFormatDownloaded** | **String** | An asset's format was downloaded | [optional] 
**assetDeleted** | **String** | An asset was deleted or not | [optional] 
**assetDescriptionUpdated** | **String** | An asset was redescribed by the user | [optional] 
**assetNameUpdated** | **String** | An asset was renamed by the user | [optional] 
**assetFormatGenericClassificationUpdated** | **String** | A generic classification was changed on a format within an asset | [optional] 
**assetFormatSpecificClassificationUpdated** | **String** | A specific classification was changed on a format within an asset | [optional] 
**assetCreationFailed** | **String** |  | [optional] 
**assetTagAdded** | **String** |  | [optional] 
**assetLinkAdded** | **String** |  | [optional] 
**assetLinkGenerated** | **String** | user generated a link for the asset | [optional] 
**assetLinkDeleted** | **String** |  | [optional] 
**assetTagDeleted** | **String** |  | [optional] 
**assetUpdated** | **String** | This is just a generic string for an asset was updated. | [optional] 
**assetFormatValueEdited** | **String** | This is a side effect event for a format value getting edited that exists on an asset. | [optional] 
**assetFormatUpdated** | **String** | This is a generic activity event for an asset getting updated because our format was updated for some reason. | [optional] 
**assetLinkRevoked** | **String** | This means that a shareable link was revoked. | [optional] 
**assetPersonAdded** | **String** | This just means that a person was added via the user. | [optional] 
**assetPersonDeleted** | **String** | This just means that a person was deleted via the user. | [optional] 
**assetSensitiveAdded** | **String** | This just means that a sensitive was added via the user. | [optional] 
**assetSensitiveDeleted** | **String** | This just means that a sensitive was deleted via the user. | [optional] 
**suggestedAssetReferenced** | **String** | This means that an asset was view/used while the user was looking at the suggestion view. | [optional] 
**searchedAssetReferenced** | **String** | This means that an asset was view/used while the user was looking at the searching view. | [optional] 
**assetReferenced** | **String** | This means that an asset was view/used while the user was looking at the default view. | [optional] 
**activityAssetReferenced** | **String** | This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view) | [optional] 
**assetAnnotationAdded** | **String** |  | [optional] 
**assetAnnotationDeleted** | **String** |  | [optional] 
**assetAnnotationUpdated** | **String** |  | [optional] 
**assetHintAdded** | **String** |  | [optional] 
**assetHintDeleted** | **String** |  | [optional] 
**assetHintUpdated** | **String** |  | [optional] 
**assetAnchorAdded** | **String** |  | [optional] 
**assetAnchorDeleted** | **String** |  | [optional] 
**assetAnchorUpdated** | **String** |  | [optional] 




