---
title: TrackedAssetEventFormatReclassificationMetadata | Python SDK
---

# TrackedAssetEventFormatReclassificationMetadata

Metadata of a format reclassification event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**previous** | [**Classification**](Classification) |  | [optional] 
**current** | [**Classification**](Classification) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_asset_event_format_reclassification_metadata import TrackedAssetEventFormatReclassificationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedAssetEventFormatReclassificationMetadata from a JSON string
tracked_asset_event_format_reclassification_metadata_instance = TrackedAssetEventFormatReclassificationMetadata.from_json(json)
# print the JSON string representation of the object
print(TrackedAssetEventFormatReclassificationMetadata.to_json())

# convert the object into a dict
tracked_asset_event_format_reclassification_metadata_dict = tracked_asset_event_format_reclassification_metadata_instance.to_dict()
# create an instance of TrackedAssetEventFormatReclassificationMetadata from a dict
tracked_asset_event_format_reclassification_metadata_form_dict = tracked_asset_event_format_reclassification_metadata.from_dict(tracked_asset_event_format_reclassification_metadata_dict)
```


