# Accessors


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Accessor]**](Accessor) |  | 

## Example

```python
from pieces_os_client.models.accessors import Accessors

# TODO update the JSON string below
json = "{}"
# create an instance of Accessors from a JSON string
accessors_instance = Accessors.from_json(json)
# print the JSON string representation of the object
print(Accessors.to_json())

# convert the object into a dict
accessors_dict = accessors_instance.to_dict()
# create an instance of Accessors from a dict
accessors_form_dict = accessors.from_dict(accessors_dict)
```


