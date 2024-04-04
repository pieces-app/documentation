# Sensitive

This is a fully referenced representation of a sensitive pieces of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**FlattenedAsset**](FlattenedAsset) |  | 
**text** | **str** |  | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | 
**category** | [**SensitiveCategoryEnum**](SensitiveCategoryEnum) |  | 
**severity** | [**SensitiveSeverityEnum**](SensitiveSeverityEnum) |  | 
**name** | **str** |  | 
**description** | **str** |  | 
**metadata** | [**SensitiveMetadata**](SensitiveMetadata) |  | [optional] 
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.sensitive import Sensitive

# TODO update the JSON string below
json = "{}"
# create an instance of Sensitive from a JSON string
sensitive_instance = Sensitive.from_json(json)
# print the JSON string representation of the object
print(Sensitive.to_json())

# convert the object into a dict
sensitive_dict = sensitive_instance.to_dict()
# create an instance of Sensitive from a dict
sensitive_form_dict = sensitive.from_dict(sensitive_dict)
```



