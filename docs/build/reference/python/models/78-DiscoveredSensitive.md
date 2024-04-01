# DiscoveredSensitive

This will return a discoveredSensitive, with a seed that can be used to create if automatic is set to false. and will provide the original text provided.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**seed** | [**SeededSensitive**](SeededSensitive) |  | 
**text** | **str** |  | 

## Example

```python
from pieces_os_client.models.discovered_sensitive import DiscoveredSensitive

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredSensitive from a JSON string
discovered_sensitive_instance = DiscoveredSensitive.from_json(json)
# print the JSON string representation of the object
print DiscoveredSensitive.to_json()

# convert the object into a dict
discovered_sensitive_dict = discovered_sensitive_instance.to_dict()
# create an instance of DiscoveredSensitive from a dict
discovered_sensitive_form_dict = discovered_sensitive.from_dict(discovered_sensitive_dict)
```



