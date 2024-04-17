---
title: AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs | Python SDK
---

# AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**adoption_install** | **str** |  | [optional] 
**adoption_uninstall** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.analytics_tracked_adoption_event_identifier_description_pairs import AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs from a JSON string
analytics_tracked_adoption_event_identifier_description_pairs_instance = AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs.from_json(json)
# print the JSON string representation of the object
print(AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs.to_json())

# convert the object into a dict
analytics_tracked_adoption_event_identifier_description_pairs_dict = analytics_tracked_adoption_event_identifier_description_pairs_instance.to_dict()
# create an instance of AnalyticsTrackedAdoptionEventIdentifierDescriptionPairs from a dict
analytics_tracked_adoption_event_identifier_description_pairs_form_dict = analytics_tracked_adoption_event_identifier_description_pairs.from_dict(analytics_tracked_adoption_event_identifier_description_pairs_dict)
```


