# SeededTrackedAssetEvent

This seeded tracked asset event will be recieved by a context on the OS Server side, which will then be able to look up the asset id and structure the asset for shipment to Segment aka a fully built TrackedAssetEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | 
**identifier_description_pair** | [**TrackedAssetEventIdentifierDescriptionPairs**](TrackedAssetEventIdentifierDescriptionPairs) |  | 
**metadata** | [**TrackedAssetEventMetadata**](TrackedAssetEventMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_asset_event import SeededTrackedAssetEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedAssetEvent from a JSON string
seeded_tracked_asset_event_instance = SeededTrackedAssetEvent.from_json(json)
# print the JSON string representation of the object
print(SeededTrackedAssetEvent.to_json())

# convert the object into a dict
seeded_tracked_asset_event_dict = seeded_tracked_asset_event_instance.to_dict()
# create an instance of SeededTrackedAssetEvent from a dict
seeded_tracked_asset_event_form_dict = seeded_tracked_asset_event.from_dict(seeded_tracked_asset_event_dict)
```


