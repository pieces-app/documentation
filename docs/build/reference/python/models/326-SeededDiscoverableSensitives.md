---
title: SeededDiscoverableSensitives | Python SDK
---

# SeededDiscoverableSensitives


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[SeededDiscoverableSensitive]**](SeededDiscoverableSensitive) |  | 
**application** | **str** |  | 

## Example

```python
from pieces_os_client.models.seeded_discoverable_sensitives import SeededDiscoverableSensitives

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableSensitives from a JSON string
seeded_discoverable_sensitives_instance = SeededDiscoverableSensitives.from_json(json)
# print the JSON string representation of the object
print(SeededDiscoverableSensitives.to_json())

# convert the object into a dict
seeded_discoverable_sensitives_dict = seeded_discoverable_sensitives_instance.to_dict()
# create an instance of SeededDiscoverableSensitives from a dict
seeded_discoverable_sensitives_form_dict = seeded_discoverable_sensitives.from_dict(seeded_discoverable_sensitives_dict)
```


