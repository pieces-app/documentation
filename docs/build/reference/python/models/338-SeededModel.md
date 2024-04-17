# SeededModel

This is Precursor to a Model.  bytes: here is the size of the model in a file local on your computer. ram: is the amount of ram usage when the model is loaded into memory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**version** | **str** | this is a version of the model. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**name** | **str** | This is an Optional Name of the Model. | 
**description** | **str** | An Optional Description of the model itself. | [optional] 
**cloud** | **bool** | This will inform the user if this was a model that is hosted in the cloud | 
**type** | [**ModelTypeEnum**](ModelTypeEnum) |  | 
**usage** | [**ModelUsageEnum**](ModelUsageEnum) |  | 
**bytes** | [**ByteDescriptor**](ByteDescriptor) |  | [optional] 
**ram** | [**ByteDescriptor**](ByteDescriptor) |  | [optional] 
**quantization** | **str** | quantization is a string like: q8f16_0,  q4f16_1, etc... | [optional] 
**foundation** | [**ModelFoundationEnum**](ModelFoundationEnum) |  | [optional] 
**downloaded** | **bool** | This is an optional bool to let us know if this model has been downloaded locally. | [optional] 
**unique** | **str** | This is the unique model name used to load the model. | [optional] 
**parameters** | **float** | This is the number of parameters in terms of billions. | [optional] 
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum) |  | [optional] 
**cpu** | **bool** | This is an optional bool that is optimized for CPU usage. | [optional] 
**max_tokens** | [**ModelMaxTokens**](ModelMaxTokens) |  | [optional] 
**custom** | **bool** | This is reserved to custommly registed models. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_model import SeededModel

# TODO update the JSON string below
json = "{}"
# create an instance of SeededModel from a JSON string
seeded_model_instance = SeededModel.from_json(json)
# print the JSON string representation of the object
print(SeededModel.to_json())

# convert the object into a dict
seeded_model_dict = seeded_model_instance.to_dict()
# create an instance of SeededModel from a dict
seeded_model_form_dict = seeded_model.from_dict(seeded_model_dict)
```


