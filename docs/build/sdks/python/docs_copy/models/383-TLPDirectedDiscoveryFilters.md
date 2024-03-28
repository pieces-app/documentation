# TLPDirectedDiscoveryFilters

Contains array of TLPDirectedDiscoveryFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iterable** | [**List[TLPDirectedDiscoveryFilter]**](TLPDirectedDiscoveryFilter) | Array that contains filters like class/function/loop | 

## Example

```python
from pieces_os_client.models.tlp_directed_discovery_filters import TLPDirectedDiscoveryFilters

# TODO update the JSON string below
json = "{}"
# create an instance of TLPDirectedDiscoveryFilters from a JSON string
tlp_directed_discovery_filters_instance = TLPDirectedDiscoveryFilters.from_json(json)
# print the JSON string representation of the object
print TLPDirectedDiscoveryFilters.to_json()

# convert the object into a dict
tlp_directed_discovery_filters_dict = tlp_directed_discovery_filters_instance.to_dict()
# create an instance of TLPDirectedDiscoveryFilters from a dict
tlp_directed_discovery_filters_form_dict = tlp_directed_discovery_filters.from_dict(tlp_directed_discovery_filters_dict)
```



