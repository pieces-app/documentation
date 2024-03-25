# FlattenedSensitive

This is a dereferenced representation of a sensitive pieces of data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | 
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
from pieces_os_client.models.flattened_sensitive import FlattenedSensitive

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedSensitive from a JSON string
flattened_sensitive_instance = FlattenedSensitive.from_json(json)
# print the JSON string representation of the object
print FlattenedSensitive.to_json()

# convert the object into a dict
flattened_sensitive_dict = flattened_sensitive_instance.to_dict()
# create an instance of FlattenedSensitive from a dict
flattened_sensitive_form_dict = flattened_sensitive.from_dict(flattened_sensitive_dict)
```



