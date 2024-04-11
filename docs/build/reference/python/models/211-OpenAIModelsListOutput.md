# OpenAIModelsListOutput

This is the output model for the /open_ai/models/list endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**models** | [**SeededModels**](SeededModels) |  | 

## Example

```python
from pieces_os_client.models.open_ai_models_list_output import OpenAIModelsListOutput

# TODO update the JSON string below
json = "{}"
# create an instance of OpenAIModelsListOutput from a JSON string
open_ai_models_list_output_instance = OpenAIModelsListOutput.from_json(json)
# print the JSON string representation of the object
print(OpenAIModelsListOutput.to_json())

# convert the object into a dict
open_ai_models_list_output_dict = open_ai_models_list_output_instance.to_dict()
# create an instance of OpenAIModelsListOutput from a dict
open_ai_models_list_output_form_dict = open_ai_models_list_output.from_dict(open_ai_models_list_output_dict)
```


