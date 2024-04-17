---
title: Theme | Python SDK
---

# Theme

This will describe the theme that belongs to a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**dark** | **bool** |  | 

## Example

```python
from pieces_os_client.models.theme import Theme

# TODO update the JSON string below
json = "{}"
# create an instance of Theme from a JSON string
theme_instance = Theme.from_json(json)
# print the JSON string representation of the object
print(Theme.to_json())

# convert the object into a dict
theme_dict = theme_instance.to_dict()
# create an instance of Theme from a dict
theme_form_dict = theme.from_dict(theme_dict)
```


