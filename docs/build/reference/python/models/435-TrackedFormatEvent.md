---
title: TrackedFormatEvent | Python SDK
---

# TrackedFormatEvent

This is a model that represents a generic event that we may want to track in relation to a format, for example beamed, copied, downloaded, and view. ** Note: This is the model that will get returned by our api, and is. Representative of a full TrackedFormat event. **

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**format** | [**TrackedFormat**](TrackedFormat) |  | 
**identifier_description_pair** | [**TrackedFormatEventIdentifierDescriptionPairs**](TrackedFormatEventIdentifierDescriptionPairs) |  | 
**metadata** | [**TrackedFormatEventMetadata**](TrackedFormatEventMetadata) |  | [optional] 


