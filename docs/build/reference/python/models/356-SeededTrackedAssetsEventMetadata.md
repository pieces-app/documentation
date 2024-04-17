---
title: SeededTrackedAssetsEventMetadata | Python SDK
---

# SeededTrackedAssetsEventMetadata

Additional Metadata as Neeeded i.e. Search + Query, etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search** | [**TrackedAssetsEventSearchMetadata**](TrackedAssetsEventSearchMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_assets_event_metadata import SeededTrackedAssetsEventMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedAssetsEventMetadata from a JSON string
seeded_tracked_assets_event_metadata_instance = SeededTrackedAssetsEventMetadata.from_json(json)
# print the JSON string representation of the object
print(SeededTrackedAssetsEventMetadata.to_json())

# convert the object into a dict
seeded_tracked_assets_event_metadata_dict = seeded_tracked_assets_event_metadata_instance.to_dict()
# create an instance of SeededTrackedAssetsEventMetadata from a dict
seeded_tracked_assets_event_metadata_form_dict = seeded_tracked_assets_event_metadata.from_dict(seeded_tracked_assets_event_metadata_dict)
```


