# Applications

A list of all the applications

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Application]**](Application) |  | 

## Example

```python
from pieces_os_client.models.applications import Applications

# TODO update the JSON string below
json = "{}"
# create an instance of Applications from a JSON string
applications_instance = Applications.from_json(json)
# print the JSON string representation of the object
print Applications.to_json()

# convert the object into a dict
applications_dict = applications_instance.to_dict()
# create an instance of Applications from a dict
applications_form_dict = applications.from_dict(applications_dict)
```



