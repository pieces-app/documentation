# SeededTrackedInteractionEventIdentifierDescriptionPairs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets_list_refreshed** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_interaction_event_identifier_description_pairs import SeededTrackedInteractionEventIdentifierDescriptionPairs

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedInteractionEventIdentifierDescriptionPairs from a JSON string
seeded_tracked_interaction_event_identifier_description_pairs_instance = SeededTrackedInteractionEventIdentifierDescriptionPairs.from_json(json)
# print the JSON string representation of the object
print(SeededTrackedInteractionEventIdentifierDescriptionPairs.to_json())

# convert the object into a dict
seeded_tracked_interaction_event_identifier_description_pairs_dict = seeded_tracked_interaction_event_identifier_description_pairs_instance.to_dict()
# create an instance of SeededTrackedInteractionEventIdentifierDescriptionPairs from a dict
seeded_tracked_interaction_event_identifier_description_pairs_form_dict = seeded_tracked_interaction_event_identifier_description_pairs.from_dict(seeded_tracked_interaction_event_identifier_description_pairs_dict)
```


