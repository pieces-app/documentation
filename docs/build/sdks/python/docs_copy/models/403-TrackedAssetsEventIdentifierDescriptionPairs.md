# TrackedAssetsEventIdentifierDescriptionPairs

These are all of the available event types that are permitted in an object pair notation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets_searched** | **str** | A If the assets were searched | [optional] 

## Example

```python
from pieces_os_client.models.tracked_assets_event_identifier_description_pairs import TrackedAssetsEventIdentifierDescriptionPairs

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedAssetsEventIdentifierDescriptionPairs from a JSON string
tracked_assets_event_identifier_description_pairs_instance = TrackedAssetsEventIdentifierDescriptionPairs.from_json(json)
# print the JSON string representation of the object
print TrackedAssetsEventIdentifierDescriptionPairs.to_json()

# convert the object into a dict
tracked_assets_event_identifier_description_pairs_dict = tracked_assets_event_identifier_description_pairs_instance.to_dict()
# create an instance of TrackedAssetsEventIdentifierDescriptionPairs from a dict
tracked_assets_event_identifier_description_pairs_form_dict = tracked_assets_event_identifier_description_pairs.from_dict(tracked_assets_event_identifier_description_pairs_dict)
```



