# Persons

This is the plural of Person. will have top level meta about the person including an iterable of all the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Person]**](Person) |  | 
**indices** | **Dict[str, int]** | This is a Map&lt;String, int&gt; where the the key is an person id. | [optional] 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.persons import Persons

# TODO update the JSON string below
json = "{}"
# create an instance of Persons from a JSON string
persons_instance = Persons.from_json(json)
# print the JSON string representation of the object
print Persons.to_json()

# convert the object into a dict
persons_dict = persons_instance.to_dict()
# create an instance of Persons from a dict
persons_form_dict = persons.from_dict(persons_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


