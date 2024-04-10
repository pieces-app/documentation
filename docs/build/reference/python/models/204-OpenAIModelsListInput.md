# OpenAIModelsListInput

This is the input model for the /open_ai/models/list endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**user** | **str** |  | 

## Example

```python
from pieces_os_client.models.open_ai_models_list_input import OpenAIModelsListInput

# TODO update the JSON string below
json = "{}"
# create an instance of OpenAIModelsListInput from a JSON string
open_ai_models_list_input_instance = OpenAIModelsListInput.from_json(json)
# print the JSON string representation of the object
print(OpenAIModelsListInput.to_json())

# convert the object into a dict
open_ai_models_list_input_dict = open_ai_models_list_input_instance.to_dict()
# create an instance of OpenAIModelsListInput from a dict
open_ai_models_list_input_form_dict = open_ai_models_list_input.from_dict(open_ai_models_list_input_dict)
```


