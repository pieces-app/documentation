# FlattenedPreview

These are the references of the formats **Only UUIDS**

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**base** | **str** | this is a reference(uuid) to the base format | 
**overlay** | **str** | this is a reference(uuid) to the overlay format | [optional] 

## Example

```python
from pieces_os_client.models.flattened_preview import FlattenedPreview

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedPreview from a JSON string
flattened_preview_instance = FlattenedPreview.from_json(json)
# print the JSON string representation of the object
print FlattenedPreview.to_json()

# convert the object into a dict
flattened_preview_dict = flattened_preview_instance.to_dict()
# create an instance of FlattenedPreview from a dict
flattened_preview_form_dict = flattened_preview.from_dict(flattened_preview_dict)
```



