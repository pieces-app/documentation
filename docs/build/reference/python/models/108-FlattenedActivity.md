---
title: FlattenedActivity | Python SDK
---

# FlattenedActivity

Note: - if mechanism == internal we will not display to the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**event** | [**SeededConnectorTracking**](SeededConnectorTracking) |  | 
**application** | [**Application**](Application) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**format** | [**ReferencedFormat**](ReferencedFormat) |  | [optional] 
**user** | [**FlattenedUserProfile**](FlattenedUserProfile) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**rank** | **int** |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_activity import FlattenedActivity

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedActivity from a JSON string
flattened_activity_instance = FlattenedActivity.from_json(json)
# print the JSON string representation of the object
print(FlattenedActivity.to_json())

# convert the object into a dict
flattened_activity_dict = flattened_activity_instance.to_dict()
# create an instance of FlattenedActivity from a dict
flattened_activity_form_dict = flattened_activity.from_dict(flattened_activity_dict)
```


