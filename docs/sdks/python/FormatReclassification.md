# FormatReclassification

This is a model that will represent the miminum properties required to update the classification of this format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | 
**format** | [**Format**](Format) |  | 

## Example

```python
from pieces_os_client.models.format_reclassification import FormatReclassification

# TODO update the JSON string below
json = "{}"
# create an instance of FormatReclassification from a JSON string
format_reclassification_instance = FormatReclassification.from_json(json)
# print the JSON string representation of the object
print FormatReclassification.to_json()

# convert the object into a dict
format_reclassification_dict = format_reclassification_instance.to_dict()
# create an instance of FormatReclassification from a dict
format_reclassification_form_dict = format_reclassification.from_dict(format_reclassification_dict)
```



