---
title: TrackedFormatEventMetadata | Python SDK
---

# TrackedFormatEventMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reclassification** | [**TrackedAssetEventFormatReclassificationMetadata**](TrackedAssetEventFormatReclassificationMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_format_event_metadata import TrackedFormatEventMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedFormatEventMetadata from a JSON string
tracked_format_event_metadata_instance = TrackedFormatEventMetadata.from_json(json)
# print the JSON string representation of the object
print(TrackedFormatEventMetadata.to_json())

# convert the object into a dict
tracked_format_event_metadata_dict = tracked_format_event_metadata_instance.to_dict()
# create an instance of TrackedFormatEventMetadata from a dict
tracked_format_event_metadata_form_dict = tracked_format_event_metadata.from_dict(tracked_format_event_metadata_dict)
```


