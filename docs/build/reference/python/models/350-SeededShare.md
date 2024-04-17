---
title: SeededShare | Python SDK
---

# SeededShare

 required to pass in an asset or assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**Asset**](Asset) |  | [optional] 
**users** | [**List[SeededUser]**](SeededUser) | if private please specificy some users you want to share this with. | [optional] 
**access** | [**AccessEnum**](AccessEnum) |  | 
**assets** | [**Assets**](Assets) |  | [optional] 
**name** | **str** | optional name, if it is available. and must be unique. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_share import SeededShare

# TODO update the JSON string below
json = "{}"
# create an instance of SeededShare from a JSON string
seeded_share_instance = SeededShare.from_json(json)
# print the JSON string representation of the object
print(SeededShare.to_json())

# convert the object into a dict
seeded_share_dict = seeded_share_instance.to_dict()
# create an instance of SeededShare from a dict
seeded_share_form_dict = seeded_share.from_dict(seeded_share_dict)
```


