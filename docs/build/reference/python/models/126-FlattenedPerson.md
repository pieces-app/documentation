# FlattenedPerson

if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...  if asset is passed then that means this person belongs to a scoped asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**type** | [**PersonType**](PersonType) |  | 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**mechanisms** | [**Dict[str, MechanismEnum]**](MechanismEnum) | This is a Map&lt;String, MechanismEnum&gt; where the the key is an asset id. | [optional] 
**interactions** | **int** | This is an optional value that will keep track of the number of times this has been interacted with. | [optional] 
**access** | [**Dict[str, PersonAccess]**](PersonAccess) | This is a Map&lt;String, PersonAccess&gt; where the the key is an asset id. | [optional] 
**tags** | [**FlattenedTags**](FlattenedTags) |  | [optional] 
**websites** | [**FlattenedWebsites**](FlattenedWebsites) |  | [optional] 
**models** | [**Dict[str, PersonModel]**](PersonModel) | This is a Map&lt;String, PersonModel&gt;, where the the key is an asset id. | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_person import FlattenedPerson

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedPerson from a JSON string
flattened_person_instance = FlattenedPerson.from_json(json)
# print the JSON string representation of the object
print FlattenedPerson.to_json()

# convert the object into a dict
flattened_person_dict = flattened_person_instance.to_dict()
# create an instance of FlattenedPerson from a dict
flattened_person_form_dict = flattened_person.from_dict(flattened_person_dict)
```



