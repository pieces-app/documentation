---
title: SeededDiscoverableSensitive | Python SDK
---

# SeededDiscoverableSensitive

This is the SeededDiscoverableSensitive, this has every property that the seededSensitive has except this one is all optionally passed in. and will override our classification if provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**text** | **str** | this is the string representative of the sensative piece of data. | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | [optional] 
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_discoverable_sensitive import SeededDiscoverableSensitive

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableSensitive from a JSON string
seeded_discoverable_sensitive_instance = SeededDiscoverableSensitive.from_json(json)
# print the JSON string representation of the object
print(SeededDiscoverableSensitive.to_json())

# convert the object into a dict
seeded_discoverable_sensitive_dict = seeded_discoverable_sensitive_instance.to_dict()
# create an instance of SeededDiscoverableSensitive from a dict
seeded_discoverable_sensitive_form_dict = seeded_discoverable_sensitive.from_dict(seeded_discoverable_sensitive_dict)
```


