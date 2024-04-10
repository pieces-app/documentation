# FlattenedTag

This is a Flattened Version of a Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**text** | **str** |  | 
**mechanisms** | [**Dict[str, MechanismEnum]**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**category** | [**TagCategoryEnum**](TagCategoryEnum) |  | 
**relationship** | [**Relationship**](Relationship) |  | [optional] 
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**persons** | [**FlattenedPersons**](FlattenedPersons) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_tag import FlattenedTag

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedTag from a JSON string
flattened_tag_instance = FlattenedTag.from_json(json)
# print the JSON string representation of the object
print(FlattenedTag.to_json())

# convert the object into a dict
flattened_tag_dict = flattened_tag_instance.to_dict()
# create an instance of FlattenedTag from a dict
flattened_tag_form_dict = flattened_tag.from_dict(flattened_tag_dict)
```


