---
title: TrackedAssetEventIdentifierDescriptionPairs | Python SDK
---

# TrackedAssetEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset_created** | **str** | The key value pair for an asset being created. | [optional] 
**asset_viewed** | **str** | An asset was viewed | [optional] 
**asset_format_copied** | **str** | An asset&#39;s format was copied | [optional] 
**asset_format_downloaded** | **str** | An asset&#39;s format was downloaded | [optional] 
**asset_deleted** | **str** | An asset was deleted or not | [optional] 
**asset_description_updated** | **str** | An asset was redescribed by the user | [optional] 
**asset_name_updated** | **str** | An asset was renamed by the user | [optional] 
**asset_format_generic_classification_updated** | **str** | A generic classification was changed on a format within an asset | [optional] 
**asset_format_specific_classification_updated** | **str** | A specific classification was changed on a format within an asset | [optional] 
**asset_creation_failed** | **str** |  | [optional] 
**asset_tag_added** | **str** |  | [optional] 
**asset_link_added** | **str** |  | [optional] 
**asset_link_generated** | **str** | user generated a link for the asset | [optional] 
**asset_link_deleted** | **str** |  | [optional] 
**asset_tag_deleted** | **str** |  | [optional] 
**asset_updated** | **str** | This is just a generic string for an asset was updated. | [optional] 
**asset_format_value_edited** | **str** | This is a side effect event for a format value getting edited that exists on an asset. | [optional] 
**asset_format_updated** | **str** | This is a generic activity event for an asset getting updated because our format was updated for some reason. | [optional] 
**asset_link_revoked** | **str** | This means that a shareable link was revoked. | [optional] 
**asset_person_added** | **str** | This just means that a person was added via the user. | [optional] 
**asset_person_deleted** | **str** | This just means that a person was deleted via the user. | [optional] 
**asset_sensitive_added** | **str** | This just means that a sensitive was added via the user. | [optional] 
**asset_sensitive_deleted** | **str** | This just means that a sensitive was deleted via the user. | [optional] 
**suggested_asset_referenced** | **str** | This means that an asset was view/used while the user was looking at the suggestion view. | [optional] 
**searched_asset_referenced** | **str** | This means that an asset was view/used while the user was looking at the searching view. | [optional] 
**asset_referenced** | **str** | This means that an asset was view/used while the user was looking at the default view. | [optional] 
**activity_asset_referenced** | **str** | This means that a user referenced an asset by first clicking on an asset within an activity event.(ie from the activity view) | [optional] 
**asset_annotation_added** | **str** |  | [optional] 
**asset_annotation_deleted** | **str** |  | [optional] 
**asset_annotation_updated** | **str** |  | [optional] 
**asset_hint_added** | **str** |  | [optional] 
**asset_hint_deleted** | **str** |  | [optional] 
**asset_hint_updated** | **str** |  | [optional] 
**asset_anchor_added** | **str** |  | [optional] 
**asset_anchor_deleted** | **str** |  | [optional] 
**asset_anchor_updated** | **str** |  | [optional] 


