# TrackedAssetEventCreationMetadataFile

If an asset was created from a file attachment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keyboard** | **bool** | Whether the file was pasted via the keyboard | [optional] 
**drag_and_drop** | **bool** | Whether the file was dropped onto pieces | [optional] 
**interaction** | **bool** | Whether the file was attached via a button click | [optional] 

## Example

```python
from pieces_os_client.models.tracked_asset_event_creation_metadata_file import TrackedAssetEventCreationMetadataFile

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedAssetEventCreationMetadataFile from a JSON string
tracked_asset_event_creation_metadata_file_instance = TrackedAssetEventCreationMetadataFile.from_json(json)
# print the JSON string representation of the object
print(TrackedAssetEventCreationMetadataFile.to_json())

# convert the object into a dict
tracked_asset_event_creation_metadata_file_dict = tracked_asset_event_creation_metadata_file_instance.to_dict()
# create an instance of TrackedAssetEventCreationMetadataFile from a dict
tracked_asset_event_creation_metadata_file_form_dict = tracked_asset_event_creation_metadata_file.from_dict(tracked_asset_event_creation_metadata_file_dict)
```



