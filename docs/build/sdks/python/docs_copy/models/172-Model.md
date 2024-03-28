# Model

This is a Machine Learning Model, that will give readable information about the Machine Learning Model Used.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | uuid  | 
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
**loaded** | **bool** | This is a boolean that represents if the model is loaded into memory.(this is not persisted, and is calculated on the fly.) | [optional] 
**unique** | **str** | This is the unique model name used to load the model. | [optional] 
**parameters** | **float** | This is the number of parameters in terms of billions. | [optional] 
**provider** | [**ExternalMLProviderEnum**](ExternalMLProviderEnum) |  | [optional] 
**cpu** | **bool** | This is an optional bool that is optimized for CPU usage. | [optional] 
**downloading** | **bool** | This is a calculated property, that will say if this is currently downloading. | [optional] 
**max_tokens** | [**ModelMaxTokens**](ModelMaxTokens) |  | [optional] 
**custom** | **bool** |  | [optional] 

## Example

```python
from pieces_os_client.models.model import Model

# TODO update the JSON string below
json = "{}"
# create an instance of Model from a JSON string
model_instance = Model.from_json(json)
# print the JSON string representation of the object
print Model.to_json()

# convert the object into a dict
model_dict = model_instance.to_dict()
# create an instance of Model from a dict
model_form_dict = model.from_dict(model_dict)
```



