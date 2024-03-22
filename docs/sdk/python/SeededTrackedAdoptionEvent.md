# SeededTrackedAdoptionEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**identifier_description_pair** | [**AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs**](AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_adoption_event import SeededTrackedAdoptionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedAdoptionEvent from a JSON string
seeded_tracked_adoption_event_instance = SeededTrackedAdoptionEvent.from_json(json)
# print the JSON string representation of the object
print SeededTrackedAdoptionEvent.to_json()

# convert the object into a dict
seeded_tracked_adoption_event_dict = seeded_tracked_adoption_event_instance.to_dict()
# create an instance of SeededTrackedAdoptionEvent from a dict
seeded_tracked_adoption_event_form_dict = seeded_tracked_adoption_event.from_dict(seeded_tracked_adoption_event_dict)
```



