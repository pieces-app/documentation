---
title: SeededTrackedAssetsEvent | Python SDK
---

# SeededTrackedAssetsEvent

An seeded event model that can occur at the assets level i.e. search 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**identifier_description_pair** | [**TrackedAssetsEventIdentifierDescriptionPairs**](TrackedAssetsEventIdentifierDescriptionPairs) |  | [optional] 
**metadata** | [**SeededTrackedAssetsEventMetadata**](SeededTrackedAssetsEventMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_assets_event import SeededTrackedAssetsEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedAssetsEvent from a JSON string
seeded_tracked_assets_event_instance = SeededTrackedAssetsEvent.from_json(json)
# print the JSON string representation of the object
print(SeededTrackedAssetsEvent.to_json())

# convert the object into a dict
seeded_tracked_assets_event_dict = seeded_tracked_assets_event_instance.to_dict()
# create an instance of SeededTrackedAssetsEvent from a dict
seeded_tracked_assets_event_form_dict = seeded_tracked_assets_event.from_dict(seeded_tracked_assets_event_dict)
```


