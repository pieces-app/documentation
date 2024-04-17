---
title: SeededExternalProvider | Python SDK
---

# SeededExternalProvider

This is the minimum information needed to connect an additional provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**ExternalProviderTypeEnum**](ExternalProviderTypeEnum) |  | 

## Example

```python
from pieces_os_client.models.seeded_external_provider import SeededExternalProvider

# TODO update the JSON string below
json = "{}"
# create an instance of SeededExternalProvider from a JSON string
seeded_external_provider_instance = SeededExternalProvider.from_json(json)
# print the JSON string representation of the object
print(SeededExternalProvider.to_json())

# convert the object into a dict
seeded_external_provider_dict = seeded_external_provider_instance.to_dict()
# create an instance of SeededExternalProvider from a dict
seeded_external_provider_form_dict = seeded_external_provider.from_dict(seeded_external_provider_dict)
```


