# ExportedDatabaseFormat


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | this is the id of the format | 
**raw** | **List[int]** | these are bytes. | 

## Example

```python
from pieces_os_client.models.exported_database_format import ExportedDatabaseFormat

# TODO update the JSON string below
json = "{}"
# create an instance of ExportedDatabaseFormat from a JSON string
exported_database_format_instance = ExportedDatabaseFormat.from_json(json)
# print the JSON string representation of the object
print(ExportedDatabaseFormat.to_json())

# convert the object into a dict
exported_database_format_dict = exported_database_format_instance.to_dict()
# create an instance of ExportedDatabaseFormat from a dict
exported_database_format_form_dict = exported_database_format.from_dict(exported_database_format_dict)
```


