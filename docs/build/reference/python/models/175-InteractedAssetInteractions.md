---
title: InteractedAssetInteractions | Python SDK
---

# InteractedAssetInteractions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**viewed** | **str** | https://en.wikipedia.org/wiki/ISO_8601#Time_intervals | 
**touched** | **bool** | If the user touched or panned over the asset. | [optional] [default to False]
**scrolled** | **bool** | If the user scrolled over the asset. | [optional] [default to False]

## Example

```python
from pieces_os_client.models.interacted_asset_interactions import InteractedAssetInteractions

# TODO update the JSON string below
json = "{}"
# create an instance of InteractedAssetInteractions from a JSON string
interacted_asset_interactions_instance = InteractedAssetInteractions.from_json(json)
# print the JSON string representation of the object
print(InteractedAssetInteractions.to_json())

# convert the object into a dict
interacted_asset_interactions_dict = interacted_asset_interactions_instance.to_dict()
# create an instance of InteractedAssetInteractions from a dict
interacted_asset_interactions_form_dict = interacted_asset_interactions.from_dict(interacted_asset_interactions_dict)
```


