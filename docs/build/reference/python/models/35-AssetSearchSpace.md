---
title: AssetSearchSpace | Python SDK
---

# AssetSearchSpace

This is provided search spaces, This is a provided assets, TODO in the future we might want to add seeds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**identifers** | [**FlattenedAssets**](FlattenedAssets) |  | 

## Example

```python
from pieces_os_client.models.asset_search_space import AssetSearchSpace

# TODO update the JSON string below
json = "{}"
# create an instance of AssetSearchSpace from a JSON string
asset_search_space_instance = AssetSearchSpace.from_json(json)
# print the JSON string representation of the object
print(AssetSearchSpace.to_json())

# convert the object into a dict
asset_search_space_dict = asset_search_space_instance.to_dict()
# create an instance of AssetSearchSpace from a dict
asset_search_space_form_dict = asset_search_space.from_dict(asset_search_space_dict)
```


