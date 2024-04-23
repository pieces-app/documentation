---
title: TrackedAssetEventIdentifierDescriptionPairs | Kotlin SDK
---



# TrackedAssetEventIdentifierDescriptionPairs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  |  [optional]
**assetCreated** | [**inline**](#asset_created) | The key value pair for an asset being created. |  [optional]
**assetViewed** | [**inline**](#asset_viewed) | An asset was viewed |  [optional]
**assetFormatCopied** | [**inline**](#asset_format_copied) | An asset&#39;s format was copied |  [optional]
**assetFormatDownloaded** | [**inline**](#asset_format_downloaded) | An asset&#39;s format was downloaded |  [optional]
**assetDeleted** | [**inline**](#asset_deleted) | An asset was deleted or not |  [optional]
**assetDescriptionUpdated** | [**inline**](#asset_description_updated) | An asset was redescribed by the user |  [optional]
**assetNameUpdated** | [**inline**](#asset_name_updated) | An asset was renamed by the user |  [optional]
**assetFormatGenericClassificationUpdated** | [**inline**](#asset_format_generic_classification_updated) | A generic classification was changed on a format within an asset |  [optional]
**assetFormatSpecificClassificationUpdated** | [**inline**](#asset_format_specific_classification_updated) | A specific classification was changed on a format within an asset |  [optional]
**assetCreationFailed** | [**inline**](#asset_creation_failed) |  |  [optional]
**assetTagAdded** | [**inline**](#asset_tag_added) |  |  [optional]
**assetLinkAdded** | [**inline**](#asset_link_added) |  |  [optional]
**assetLinkGenerated** | [**inline**](#asset_link_generated) | user generated a link for the asset |  [optional]
**assetLinkDeleted** | [**inline**](#asset_link_deleted) |  |  [optional]
**assetTagDeleted** | [**inline**](#asset_tag_deleted) |  |  [optional]
**assetUpdated** | [**inline**](#asset_updated) | This is just a generic string for an asset was updated. |  [optional]
**assetFormatValueEdited** | [**inline**](#asset_format_value_edited) | This is a side effect event for a format value getting edited that exists on an asset. |  [optional]
**assetFormatUpdated** | [**inline**](#asset_format_updated) | This is a generic activity event for an asset getting updated because our format was updated for some reason. |  [optional]
**assetLinkRevoked** | [**inline**](#asset_link_revoked) | This means that a shareable link was revoked. |  [optional]
**assetPersonAdded** | [**inline**](#asset_person_added) | This just means that a person was added via the user. |  [optional]
**assetPersonDeleted** | [**inline**](#asset_person_deleted) | This just means that a person was deleted via the user. |  [optional]
**assetSensitiveAdded** | [**inline**](#asset_sensitive_added) | This just means that a sensitive was added via the user. |  [optional]
**assetSensitiveDeleted** | [**inline**](#asset_sensitive_deleted) | This just means that a sensitive was deleted via the user. |  [optional]
**suggestedAssetReferenced** | [**inline**](#suggested_asset_referenced) | This means that an asset was view/used while the user was looking at the suggestion view. |  [optional]
**searchedAssetReferenced** | [**inline**](#searched_asset_referenced) | This means that an asset was view/used while the user was looking at the searching view. |  [optional]
**assetReferenced** | [**inline**](#asset_referenced) | This means that an asset was view/used while the user was looking at the default view. |  [optional]
**activityAssetReferenced** | [**inline**](#activity_asset_referenced) | This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view) |  [optional]
**assetAnnotationAdded** | [**inline**](#asset_annotation_added) |  |  [optional]
**assetAnnotationDeleted** | [**inline**](#asset_annotation_deleted) |  |  [optional]
**assetAnnotationUpdated** | [**inline**](#asset_annotation_updated) |  |  [optional]
**assetHintAdded** | [**inline**](#asset_hint_added) |  |  [optional]
**assetHintDeleted** | [**inline**](#asset_hint_deleted) |  |  [optional]
**assetHintUpdated** | [**inline**](#asset_hint_updated) |  |  [optional]
**assetAnchorAdded** | [**inline**](#asset_anchor_added) |  |  [optional]
**assetAnchorDeleted** | [**inline**](#asset_anchor_deleted) |  |  [optional]
**assetAnchorUpdated** | [**inline**](#asset_anchor_updated) |  |  [optional]


## asset_created
Name | Value
---- | -----
assetCreated | an_asset_was_created


## asset_viewed
Name | Value
---- | -----
assetViewed | an_asset_was_viewed


## asset_format_copied
Name | Value
---- | -----
assetFormatCopied | an_asset_preview_format_was_copied


## asset_format_downloaded
Name | Value
---- | -----
assetFormatDownloaded | an_asset_format_was_downloaded


## asset_deleted
Name | Value
---- | -----
assetDeleted | an_asset_was_deleted


## asset_description_updated
Name | Value
---- | -----
assetDescriptionUpdated | an_asset_was_redescribed_by_the_user


## asset_name_updated
Name | Value
---- | -----
assetNameUpdated | an_asset_was_renamed_by_the_user


## asset_format_generic_classification_updated
Name | Value
---- | -----
assetFormatGenericClassificationUpdated | a_generic_classification_was_changed_on_a_format_within_an_asset


## asset_format_specific_classification_updated
Name | Value
---- | -----
assetFormatSpecificClassificationUpdated | a_specific_classification_was_changed_on_a_format_within_an_asset


## asset_creation_failed
Name | Value
---- | -----
assetCreationFailed | an_asset_failed_to_be_created


## asset_tag_added
Name | Value
---- | -----
assetTagAdded | a_tag_was_added_by_the_user


## asset_link_added
Name | Value
---- | -----
assetLinkAdded | a_link_was_added_by_the_user


## asset_link_generated
Name | Value
---- | -----
assetLinkGenerated | an_asset_link_was_generated


## asset_link_deleted
Name | Value
---- | -----
assetLinkDeleted | a_link_was_deleted_by_the_user


## asset_tag_deleted
Name | Value
---- | -----
assetTagDeleted | a_tag_was_deleted_by_the_user


## asset_updated
Name | Value
---- | -----
assetUpdated | an_asset_was_updated


## asset_format_value_edited
Name | Value
---- | -----
assetFormatValueEdited | a_specific_format_value_was_edited_on_an_asset


## asset_format_updated
Name | Value
---- | -----
assetFormatUpdated | a_specific_format_was_updated_on_an_asset


## asset_link_revoked
Name | Value
---- | -----
assetLinkRevoked | an_asset_link_was_revoked


## asset_person_added
Name | Value
---- | -----
assetPersonAdded | a_person_was_added_by_the_user


## asset_person_deleted
Name | Value
---- | -----
assetPersonDeleted | a_person_was_deleted_by_the_user


## asset_sensitive_added
Name | Value
---- | -----
assetSensitiveAdded | a_sensitive_was_added_by_the_user


## asset_sensitive_deleted
Name | Value
---- | -----
assetSensitiveDeleted | a_sensitive_was_deleted_by_the_user


## suggested_asset_referenced
Name | Value
---- | -----
suggestedAssetReferenced | a_suggested_asset_was_referenced_by_the_user


## searched_asset_referenced
Name | Value
---- | -----
searchedAssetReferenced | a_searched_asset_was_referenced_by_the_user


## asset_referenced
Name | Value
---- | -----
assetReferenced | an_asset_was_referenced_by_the_user


## activity_asset_referenced
Name | Value
---- | -----
activityAssetReferenced | an_activity_asset_was_referenced_by_the_user


## asset_annotation_added
Name | Value
---- | -----
assetAnnotationAdded | an_annotation_was_added_by_the_user


## asset_annotation_deleted
Name | Value
---- | -----
assetAnnotationDeleted | an_annotation_was_deleted_by_the_user


## asset_annotation_updated
Name | Value
---- | -----
assetAnnotationUpdated | an_annotation_was_updated_by_the_user


## asset_hint_added
Name | Value
---- | -----
assetHintAdded | a_hint_was_added_by_the_user


## asset_hint_deleted
Name | Value
---- | -----
assetHintDeleted | a_hint_was_deleted_by_the_user


## asset_hint_updated
Name | Value
---- | -----
assetHintUpdated | a_hint_was_updated_by_the_user


## asset_anchor_added
Name | Value
---- | -----
assetAnchorAdded | a_anchor_was_added_by_the_user


## asset_anchor_deleted
Name | Value
---- | -----
assetAnchorDeleted | a_anchor_was_deleted_by_the_user


## asset_anchor_updated
Name | Value
---- | -----
assetAnchorUpdated | a_anchor_was_updated_by_the_user




