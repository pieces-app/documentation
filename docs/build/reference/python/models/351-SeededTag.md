---
title: SeededTag | Python SDK
---

# SeededTag

This is the minimum information needed when creating a Tag.  Default we will attach manual to a tag unless otherwise specified for mechanism.  you can optionally add an asset, format, or person uuid to attach this tag directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**text** | **str** | This is the description of the tag. | 
**asset** | **str** | this is a uuid that references an asset. | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | [optional] 
**person** | **str** | uuid of the person, you want to add this tag too | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tag import SeededTag

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTag from a JSON string
seeded_tag_instance = SeededTag.from_json(json)
# print the JSON string representation of the object
print(SeededTag.to_json())

# convert the object into a dict
seeded_tag_dict = seeded_tag_instance.to_dict()
# create an instance of SeededTag from a dict
seeded_tag_form_dict = seeded_tag.from_dict(seeded_tag_dict)
```


