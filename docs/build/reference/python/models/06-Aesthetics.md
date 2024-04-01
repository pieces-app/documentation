# Aesthetics

These are aesthetics properties that will ensure the darkmode + font size and other aesthetics properties persist:)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**theme** | [**Theme**](Theme) |  | 
**font** | [**Font**](Font) |  | 

## Example

```python
from pieces_os_client.models.aesthetics import Aesthetics

# TODO update the JSON string below
json = "{}"
# create an instance of Aesthetics from a JSON string
aesthetics_instance = Aesthetics.from_json(json)
# print the JSON string representation of the object
print Aesthetics.to_json()

# convert the object into a dict
aesthetics_dict = aesthetics_instance.to_dict()
# create an instance of Aesthetics from a dict
aesthetics_form_dict = aesthetics.from_dict(aesthetics_dict)
```



