---
title: TrackedFormatEventIdentifierDescriptionPairs | Python SDK
---

# TrackedFormatEventIdentifierDescriptionPairs

This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**format_created** | **str** | The key value pair for an asset being created. | [optional] 
**format_copied** | **str** | If a format was copied entirely | [optional] 
**format_partially_copied** | **str** | If a format was copied partially | [optional] 
**format_downloaded** | **str** | If a format was downloaded | [optional] 
**format_deleted** | **str** | If an format was deleted | [optional] 
**format_generic_classification_updated** | **str** | If a generic classification was changed on a format | [optional] 
**format_specific_classification_updated** | **str** | If a specific classification was changed on a format | [optional] 
**format_updated** | **str** | a format was updated, generic update. | [optional] 
**format_inserted** | **str** | a format was inserted | [optional] 
**format_value_edited** | **str** | a format&#39;s value was update ie, the text, etc... | [optional] 


