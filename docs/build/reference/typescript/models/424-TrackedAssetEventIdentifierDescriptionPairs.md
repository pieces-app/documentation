
# TrackedAssetEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] [default to undefined]
**assetCreated** | **string** | The key value pair for an asset being created. | [optional] [default to undefined]
**assetViewed** | **string** | An asset was viewed | [optional] [default to undefined]
**assetFormatCopied** | **string** | An asset\&#39;s format was copied | [optional] [default to undefined]
**assetFormatDownloaded** | **string** | An asset\&#39;s format was downloaded | [optional] [default to undefined]
**assetDeleted** | **string** | An asset was deleted or not | [optional] [default to undefined]
**assetDescriptionUpdated** | **string** | An asset was redescribed by the user | [optional] [default to undefined]
**assetNameUpdated** | **string** | An asset was renamed by the user | [optional] [default to undefined]
**assetFormatGenericClassificationUpdated** | **string** | A generic classification was changed on a format within an asset | [optional] [default to undefined]
**assetFormatSpecificClassificationUpdated** | **string** | A specific classification was changed on a format within an asset | [optional] [default to undefined]
**assetCreationFailed** | **string** |  | [optional] [default to undefined]
**assetTagAdded** | **string** |  | [optional] [default to undefined]
**assetLinkAdded** | **string** |  | [optional] [default to undefined]
**assetLinkGenerated** | **string** | user generated a link for the asset | [optional] [default to undefined]
**assetLinkDeleted** | **string** |  | [optional] [default to undefined]
**assetTagDeleted** | **string** |  | [optional] [default to undefined]
**assetUpdated** | **string** | This is just a generic string for an asset was updated. | [optional] [default to undefined]
**assetFormatValueEdited** | **string** | This is a side effect event for a format value getting edited that exists on an asset. | [optional] [default to undefined]
**assetFormatUpdated** | **string** | This is a generic activity event for an asset getting updated because our format was updated for some reason. | [optional] [default to undefined]
**assetLinkRevoked** | **string** | This means that a shareable link was revoked. | [optional] [default to undefined]
**assetPersonAdded** | **string** | This just means that a person was added via the user. | [optional] [default to undefined]
**assetPersonDeleted** | **string** | This just means that a person was deleted via the user. | [optional] [default to undefined]
**assetSensitiveAdded** | **string** | This just means that a sensitive was added via the user. | [optional] [default to undefined]
**assetSensitiveDeleted** | **string** | This just means that a sensitive was deleted via the user. | [optional] [default to undefined]
**suggestedAssetReferenced** | **string** | This means that an asset was view/used while the user was looking at the suggestion view. | [optional] [default to undefined]
**searchedAssetReferenced** | **string** | This means that an asset was view/used while the user was looking at the searching view. | [optional] [default to undefined]
**assetReferenced** | **string** | This means that an asset was view/used while the user was looking at the default view. | [optional] [default to undefined]
**activityAssetReferenced** | **string** | This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view) | [optional] [default to undefined]
**assetAnnotationAdded** | **string** |  | [optional] [default to undefined]
**assetAnnotationDeleted** | **string** |  | [optional] [default to undefined]
**assetAnnotationUpdated** | **string** |  | [optional] [default to undefined]
**assetHintAdded** | **string** |  | [optional] [default to undefined]
**assetHintDeleted** | **string** |  | [optional] [default to undefined]
**assetHintUpdated** | **string** |  | [optional] [default to undefined]
**assetAnchorAdded** | **string** |  | [optional] [default to undefined]
**assetAnchorDeleted** | **string** |  | [optional] [default to undefined]
**assetAnchorUpdated** | **string** |  | [optional] [default to undefined]

## Example

```typescript
import { TrackedAssetEventIdentifierDescriptionPairs } from '';

// TODO: Update the object below with actual values
const example: TrackedAssetEventIdentifierDescriptionPairs = {
    "schema": null, // 
    "assetCreated": null, // The key value pair for an asset being created.
    "assetViewed": null, // An asset was viewed
    "assetFormatCopied": null, // An asset\&#39;s format was copied
    "assetFormatDownloaded": null, // An asset\&#39;s format was downloaded
    "assetDeleted": null, // An asset was deleted or not
    "assetDescriptionUpdated": null, // An asset was redescribed by the user
    "assetNameUpdated": null, // An asset was renamed by the user
    "assetFormatGenericClassificationUpdated": null, // A generic classification was changed on a format within an asset
    "assetFormatSpecificClassificationUpdated": null, // A specific classification was changed on a format within an asset
    "assetCreationFailed": null, // 
    "assetTagAdded": null, // 
    "assetLinkAdded": null, // 
    "assetLinkGenerated": null, // user generated a link for the asset
    "assetLinkDeleted": null, // 
    "assetTagDeleted": null, // 
    "assetUpdated": null, // This is just a generic string for an asset was updated.
    "assetFormatValueEdited": null, // This is a side effect event for a format value getting edited that exists on an asset.
    "assetFormatUpdated": null, // This is a generic activity event for an asset getting updated because our format was updated for some reason.
    "assetLinkRevoked": null, // This means that a shareable link was revoked.
    "assetPersonAdded": null, // This just means that a person was added via the user.
    "assetPersonDeleted": null, // This just means that a person was deleted via the user.
    "assetSensitiveAdded": null, // This just means that a sensitive was added via the user.
    "assetSensitiveDeleted": null, // This just means that a sensitive was deleted via the user.
    "suggestedAssetReferenced": null, // This means that an asset was view/used while the user was looking at the suggestion view.
    "searchedAssetReferenced": null, // This means that an asset was view/used while the user was looking at the searching view.
    "assetReferenced": null, // This means that an asset was view/used while the user was looking at the default view.
    "activityAssetReferenced": null, // This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view)
    "assetAnnotationAdded": null, // 
    "assetAnnotationDeleted": null, // 
    "assetAnnotationUpdated": null, // 
    "assetHintAdded": null, // 
    "assetHintDeleted": null, // 
    "assetHintUpdated": null, // 
    "assetAnchorAdded": null, // 
    "assetAnchorDeleted": null, // 
    "assetAnchorUpdated": null, // 
};

console.log(example);

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example);
console.log(exampleJSON);

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TrackedAssetEventIdentifierDescriptionPairs;
console.log(exampleParsed);
```




