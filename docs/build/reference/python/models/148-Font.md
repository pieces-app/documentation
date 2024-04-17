---
title: Font | Python SDK
---

# Font

This will describe the font that the user sees.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**size** | **int** |  | 

## Example

```python
from pieces_os_client.models.font import Font

# TODO update the JSON string below
json = "{}"
# create an instance of Font from a JSON string
font_instance = Font.from_json(json)
# print the JSON string representation of the object
print(Font.to_json())

# convert the object into a dict
font_dict = font_instance.to_dict()
# create an instance of Font from a dict
font_form_dict = font.from_dict(font_dict)
```


