# TrackedAssetEventMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reclassification** | [**TrackedAssetEventFormatReclassificationMetadata**](TrackedAssetEventFormatReclassificationMetadata) |  | [optional] 
**creation** | [**TrackedAssetEventCreationMetadata**](TrackedAssetEventCreationMetadata) |  | [optional] 
**rename** | [**TrackedAssetEventRenameMetadata**](TrackedAssetEventRenameMetadata) |  | [optional] 
**tag** | [**ReferencedTag**](ReferencedTag) |  | [optional] 
**website** | [**ReferencedWebsite**](ReferencedWebsite) |  | [optional] 
**person** | [**ReferencedPerson**](ReferencedPerson) |  | [optional] 
**sensitive** | [**ReferencedSensitive**](ReferencedSensitive) |  | [optional] 
**share** | [**ReferencedShare**](ReferencedShare) |  | [optional] 
**search** | [**TrackedAssetsEventSearchMetadata**](TrackedAssetsEventSearchMetadata) |  | [optional] 
**annotation** | [**ReferencedAnnotation**](ReferencedAnnotation) |  | [optional] 
**hint** | [**ReferencedHint**](ReferencedHint) |  | [optional] 
**anchor** | [**ReferencedAnchor**](ReferencedAnchor) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_asset_event_metadata import TrackedAssetEventMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedAssetEventMetadata from a JSON string
tracked_asset_event_metadata_instance = TrackedAssetEventMetadata.from_json(json)
# print the JSON string representation of the object
print(TrackedAssetEventMetadata.to_json())

# convert the object into a dict
tracked_asset_event_metadata_dict = tracked_asset_event_metadata_instance.to_dict()
# create an instance of TrackedAssetEventMetadata from a dict
tracked_asset_event_metadata_form_dict = tracked_asset_event_metadata.from_dict(tracked_asset_event_metadata_dict)
```



