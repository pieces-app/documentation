---
title: SeededAssetTags | Python SDK
---

# SeededAssetTags


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iterable** | [**List[SeededAssetTag]**](SeededAssetTag) |  | 

## Example

```python
from pieces_os_client.models.seeded_asset_tags import SeededAssetTags

# TODO update the JSON string below
json = "{}"
# create an instance of SeededAssetTags from a JSON string
seeded_asset_tags_instance = SeededAssetTags.from_json(json)
# print the JSON string representation of the object
print(SeededAssetTags.to_json())

# convert the object into a dict
seeded_asset_tags_dict = seeded_asset_tags_instance.to_dict()
# create an instance of SeededAssetTags from a dict
seeded_asset_tags_form_dict = seeded_asset_tags.from_dict(seeded_asset_tags_dict)
```


