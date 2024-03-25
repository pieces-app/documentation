# EmbeddedModelSchema

This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**migration** | **int** | this is the current database version that this model was used for. | 
**semantic** | [**EmbeddedModelSchemaSemanticVersionEnum**](EmbeddedModelSchemaSemanticVersionEnum) |  | 

## Example

```python
from pieces_os_client.models.embedded_model_schema import EmbeddedModelSchema

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedModelSchema from a JSON string
embedded_model_schema_instance = EmbeddedModelSchema.from_json(json)
# print the JSON string representation of the object
print EmbeddedModelSchema.to_json()

# convert the object into a dict
embedded_model_schema_dict = embedded_model_schema_instance.to_dict()
# create an instance of EmbeddedModelSchema from a dict
embedded_model_schema_form_dict = embedded_model_schema.from_dict(embedded_model_schema_dict)
```



