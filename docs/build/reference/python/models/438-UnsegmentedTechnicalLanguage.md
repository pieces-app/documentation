# UnsegmentedTechnicalLanguage

This is the input model for '/machine_learning/text/technical_language/parsers/segmentation'  This will take the unsegmentedText here!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**value** | **str** |  | 

## Example

```python
from pieces_os_client.models.unsegmented_technical_language import UnsegmentedTechnicalLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of UnsegmentedTechnicalLanguage from a JSON string
unsegmented_technical_language_instance = UnsegmentedTechnicalLanguage.from_json(json)
# print the JSON string representation of the object
print(UnsegmentedTechnicalLanguage.to_json())

# convert the object into a dict
unsegmented_technical_language_dict = unsegmented_technical_language_instance.to_dict()
# create an instance of UnsegmentedTechnicalLanguage from a dict
unsegmented_technical_language_form_dict = unsegmented_technical_language.from_dict(unsegmented_technical_language_dict)
```



