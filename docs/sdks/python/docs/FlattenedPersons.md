# FlattenedPersons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedPerson]**](ReferencedPerson) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an person id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_persons import FlattenedPersons

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedPersons from a JSON string
flattened_persons_instance = FlattenedPersons.from_json(json)
# print the JSON string representation of the object
print FlattenedPersons.to_json()

# convert the object into a dict
flattened_persons_dict = flattened_persons_instance.to_dict()
# create an instance of FlattenedPersons from a dict
flattened_persons_form_dict = flattened_persons.from_dict(flattened_persons_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


