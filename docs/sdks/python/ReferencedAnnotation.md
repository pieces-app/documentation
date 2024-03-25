# ReferencedAnnotation

This is the referenced version of a annotation, main used for the uuid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedAnnotation**](FlattenedAnnotation) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_annotation import ReferencedAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedAnnotation from a JSON string
referenced_annotation_instance = ReferencedAnnotation.from_json(json)
# print the JSON string representation of the object
print ReferencedAnnotation.to_json()

# convert the object into a dict
referenced_annotation_dict = referenced_annotation_instance.to_dict()
# create an instance of ReferencedAnnotation from a dict
referenced_annotation_form_dict = referenced_annotation.from_dict(referenced_annotation_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


