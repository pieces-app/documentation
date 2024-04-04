# TLPDirectedDiscoveryFilter

Contains enum which represents code block type

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | [**TLPDirectedDiscoveryFilterEnum**](TLPDirectedDiscoveryFilterEnum) |  | 

## Example

```python
from pieces_os_client.models.tlp_directed_discovery_filter import TLPDirectedDiscoveryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of TLPDirectedDiscoveryFilter from a JSON string
tlp_directed_discovery_filter_instance = TLPDirectedDiscoveryFilter.from_json(json)
# print the JSON string representation of the object
print(TLPDirectedDiscoveryFilter.to_json())

# convert the object into a dict
tlp_directed_discovery_filter_dict = tlp_directed_discovery_filter_instance.to_dict()
# create an instance of TLPDirectedDiscoveryFilter from a dict
tlp_directed_discovery_filter_form_dict = tlp_directed_discovery_filter.from_dict(tlp_directed_discovery_filter_dict)
```



