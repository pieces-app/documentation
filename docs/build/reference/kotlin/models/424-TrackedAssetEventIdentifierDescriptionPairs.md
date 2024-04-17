---
title: TrackedAssetEventIdentifierDescriptionPairs | Kotlin SDK
---


# TrackedAssetEventIdentifierDescriptionPairs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**assetCreated** | [**inline**](#assetcreated) | The key value pair for an asset being created. |  [optional]
**assetViewed** | [**inline**](#assetviewed) | An asset was viewed |  [optional]
**assetFormatCopied** | [**inline**](#assetformatcopied) | An asset&#39;s format was copied |  [optional]
**assetFormatDownloaded** | [**inline**](#assetformatdownloaded) | An asset&#39;s format was downloaded |  [optional]
**assetDeleted** | [**inline**](#assetdeleted) | An asset was deleted or not |  [optional]
**assetDescriptionUpdated** | [**inline**](#assetdescriptionupdated) | An asset was redescribed by the user |  [optional]
**assetNameUpdated** | [**inline**](#assetnameupdated) | An asset was renamed by the user |  [optional]
**assetFormatGenericClassificationUpdated** | [**inline**](#assetformatgenericclassificationupdated) | A generic classification was changed on a format within an asset |  [optional]
**assetFormatSpecificClassificationUpdated** | [**inline**](#assetformatspecificclassificationupdated) | A specific classification was changed on a format within an asset |  [optional]
**assetCreationFailed** | [**inline**](#assetcreationfailed) |  |  [optional]
**assetTagAdded** | [**inline**](#assettagadded) |  |  [optional]
**assetLinkAdded** | [**inline**](#assetlinkadded) |  |  [optional]
**assetLinkGenerated** | [**inline**](#assetlinkgenerated) | user generated a link for the asset |  [optional]
**assetLinkDeleted** | [**inline**](#assetlinkdeleted) |  |  [optional]
**assetTagDeleted** | [**inline**](#assettagdeleted) |  |  [optional]
**assetUpdated** | [**inline**](#assetupdated) | This is just a generic string for an asset was updated. |  [optional]
**assetFormatValueEdited** | [**inline**](#assetformatvalueedited) | This is a side effect event for a format value getting edited that exists on an asset. |  [optional]
**assetFormatUpdated** | [**inline**](#assetformatupdated) | This is a generic activity event for an asset getting updated because our format was updated for some reason. |  [optional]
**assetLinkRevoked** | [**inline**](#assetlinkrevoked) | This means that a shareable link was revoked. |  [optional]
**assetPersonAdded** | [**inline**](#assetpersonadded) | This just means that a person was added via the user. |  [optional]
**assetPersonDeleted** | [**inline**](#assetpersondeleted) | This just means that a person was deleted via the user. |  [optional]
**assetSensitiveAdded** | [**inline**](#assetsensitiveadded) | This just means that a sensitive was added via the user. |  [optional]
**assetSensitiveDeleted** | [**inline**](#assetsensitivedeleted) | This just means that a sensitive was deleted via the user. |  [optional]
**suggestedAssetReferenced** | [**inline**](#suggestedassetreferenced) | This means that an asset was view/used while the user was looking at the suggestion view. |  [optional]
**searchedAssetReferenced** | [**inline**](#searchedassetreferenced) | This means that an asset was view/used while the user was looking at the searching view. |  [optional]
**assetReferenced** | [**inline**](#assetreferenced) | This means that an asset was view/used while the user was looking at the default view. |  [optional]
**activityAssetReferenced** | [**inline**](#activityassetreferenced) | This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view) |  [optional]
**assetAnnotationAdded** | [**inline**](#assetannotationadded) |  |  [optional]
**assetAnnotationDeleted** | [**inline**](#assetannotationdeleted) |  |  [optional]
**assetAnnotationUpdated** | [**inline**](#assetannotationupdated) |  |  [optional]
**assetHintAdded** | [**inline**](#assethintadded) |  |  [optional]
**assetHintDeleted** | [**inline**](#assethintdeleted) |  |  [optional]
**assetHintUpdated** | [**inline**](#assethintupdated) |  |  [optional]
**assetAnchorAdded** | [**inline**](#assetanchoradded) |  |  [optional]
**assetAnchorDeleted** | [**inline**](#assetanchordeleted) |  |  [optional]
**assetAnchorUpdated** | [**inline**](#assetanchorupdated) |  |  [optional]


<a id="AssetCreated"></a>
## Enum: asset_created
Name | Value
---- | -----
assetCreated | an_asset_was_created


<a id="AssetViewed"></a>
## Enum: asset_viewed
Name | Value
---- | -----
assetViewed | an_asset_was_viewed


<a id="AssetFormatCopied"></a>
## Enum: asset_format_copied
Name | Value
---- | -----
assetFormatCopied | an_asset_preview_format_was_copied


<a id="AssetFormatDownloaded"></a>
## Enum: asset_format_downloaded
Name | Value
---- | -----
assetFormatDownloaded | an_asset_format_was_downloaded


<a id="AssetDeleted"></a>
## Enum: asset_deleted
Name | Value
---- | -----
assetDeleted | an_asset_was_deleted


<a id="AssetDescriptionUpdated"></a>
## Enum: asset_description_updated
Name | Value
---- | -----
assetDescriptionUpdated | an_asset_was_redescribed_by_the_user


<a id="AssetNameUpdated"></a>
## Enum: asset_name_updated
Name | Value
---- | -----
assetNameUpdated | an_asset_was_renamed_by_the_user


<a id="AssetFormatGenericClassificationUpdated"></a>
## Enum: asset_format_generic_classification_updated
Name | Value
---- | -----
assetFormatGenericClassificationUpdated | a_generic_classification_was_changed_on_a_format_within_an_asset


<a id="AssetFormatSpecificClassificationUpdated"></a>
## Enum: asset_format_specific_classification_updated
Name | Value
---- | -----
assetFormatSpecificClassificationUpdated | a_specific_classification_was_changed_on_a_format_within_an_asset


<a id="AssetCreationFailed"></a>
## Enum: asset_creation_failed
Name | Value
---- | -----
assetCreationFailed | an_asset_failed_to_be_created


<a id="AssetTagAdded"></a>
## Enum: asset_tag_added
Name | Value
---- | -----
assetTagAdded | a_tag_was_added_by_the_user


<a id="AssetLinkAdded"></a>
## Enum: asset_link_added
Name | Value
---- | -----
assetLinkAdded | a_link_was_added_by_the_user


<a id="AssetLinkGenerated"></a>
## Enum: asset_link_generated
Name | Value
---- | -----
assetLinkGenerated | an_asset_link_was_generated


<a id="AssetLinkDeleted"></a>
## Enum: asset_link_deleted
Name | Value
---- | -----
assetLinkDeleted | a_link_was_deleted_by_the_user


<a id="AssetTagDeleted"></a>
## Enum: asset_tag_deleted
Name | Value
---- | -----
assetTagDeleted | a_tag_was_deleted_by_the_user


<a id="AssetUpdated"></a>
## Enum: asset_updated
Name | Value
---- | -----
assetUpdated | an_asset_was_updated


<a id="AssetFormatValueEdited"></a>
## Enum: asset_format_value_edited
Name | Value
---- | -----
assetFormatValueEdited | a_specific_format_value_was_edited_on_an_asset


<a id="AssetFormatUpdated"></a>
## Enum: asset_format_updated
Name | Value
---- | -----
assetFormatUpdated | a_specific_format_was_updated_on_an_asset


<a id="AssetLinkRevoked"></a>
## Enum: asset_link_revoked
Name | Value
---- | -----
assetLinkRevoked | an_asset_link_was_revoked


<a id="AssetPersonAdded"></a>
## Enum: asset_person_added
Name | Value
---- | -----
assetPersonAdded | a_person_was_added_by_the_user


<a id="AssetPersonDeleted"></a>
## Enum: asset_person_deleted
Name | Value
---- | -----
assetPersonDeleted | a_person_was_deleted_by_the_user


<a id="AssetSensitiveAdded"></a>
## Enum: asset_sensitive_added
Name | Value
---- | -----
assetSensitiveAdded | a_sensitive_was_added_by_the_user


<a id="AssetSensitiveDeleted"></a>
## Enum: asset_sensitive_deleted
Name | Value
---- | -----
assetSensitiveDeleted | a_sensitive_was_deleted_by_the_user


<a id="SuggestedAssetReferenced"></a>
## Enum: suggested_asset_referenced
Name | Value
---- | -----
suggestedAssetReferenced | a_suggested_asset_was_referenced_by_the_user


<a id="SearchedAssetReferenced"></a>
## Enum: searched_asset_referenced
Name | Value
---- | -----
searchedAssetReferenced | a_searched_asset_was_referenced_by_the_user


<a id="AssetReferenced"></a>
## Enum: asset_referenced
Name | Value
---- | -----
assetReferenced | an_asset_was_referenced_by_the_user


<a id="ActivityAssetReferenced"></a>
## Enum: activity_asset_referenced
Name | Value
---- | -----
activityAssetReferenced | an_activity_asset_was_referenced_by_the_user


<a id="AssetAnnotationAdded"></a>
## Enum: asset_annotation_added
Name | Value
---- | -----
assetAnnotationAdded | an_annotation_was_added_by_the_user


<a id="AssetAnnotationDeleted"></a>
## Enum: asset_annotation_deleted
Name | Value
---- | -----
assetAnnotationDeleted | an_annotation_was_deleted_by_the_user


<a id="AssetAnnotationUpdated"></a>
## Enum: asset_annotation_updated
Name | Value
---- | -----
assetAnnotationUpdated | an_annotation_was_updated_by_the_user


<a id="AssetHintAdded"></a>
## Enum: asset_hint_added
Name | Value
---- | -----
assetHintAdded | a_hint_was_added_by_the_user


<a id="AssetHintDeleted"></a>
## Enum: asset_hint_deleted
Name | Value
---- | -----
assetHintDeleted | a_hint_was_deleted_by_the_user


<a id="AssetHintUpdated"></a>
## Enum: asset_hint_updated
Name | Value
---- | -----
assetHintUpdated | a_hint_was_updated_by_the_user


<a id="AssetAnchorAdded"></a>
## Enum: asset_anchor_added
Name | Value
---- | -----
assetAnchorAdded | a_anchor_was_added_by_the_user


<a id="AssetAnchorDeleted"></a>
## Enum: asset_anchor_deleted
Name | Value
---- | -----
assetAnchorDeleted | a_anchor_was_deleted_by_the_user


<a id="AssetAnchorUpdated"></a>
## Enum: asset_anchor_updated
Name | Value
---- | -----
assetAnchorUpdated | a_anchor_was_updated_by_the_user



