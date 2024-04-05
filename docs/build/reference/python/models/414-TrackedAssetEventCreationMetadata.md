# TrackedAssetEventCreationMetadata

Metadata attached to a creation event on an Asset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**clipboard** | [**TrackedAssetEventCreationMetadataClipboard**](TrackedAssetEventCreationMetadataClipboard) |  | [optional] 
**file** | [**TrackedAssetEventCreationMetadataFile**](TrackedAssetEventCreationMetadataFile) |  | [optional] 

## Example

```python
from pieces_os_client.models.tracked_asset_event_creation_metadata import TrackedAssetEventCreationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedAssetEventCreationMetadata from a JSON string
tracked_asset_event_creation_metadata_instance = TrackedAssetEventCreationMetadata.from_json(json)
# print the JSON string representation of the object
print(TrackedAssetEventCreationMetadata.to_json())

# convert the object into a dict
tracked_asset_event_creation_metadata_dict = tracked_asset_event_creation_metadata_instance.to_dict()
# create an instance of TrackedAssetEventCreationMetadata from a dict
tracked_asset_event_creation_metadata_form_dict = tracked_asset_event_creation_metadata.from_dict(tracked_asset_event_creation_metadata_dict)
```



