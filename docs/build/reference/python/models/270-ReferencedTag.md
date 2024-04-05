# ReferencedTag

[DAG Safe] version of a Tag Model. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedTag**](FlattenedTag) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_tag import ReferencedTag

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedTag from a JSON string
referenced_tag_instance = ReferencedTag.from_json(json)
# print the JSON string representation of the object
print(ReferencedTag.to_json())

# convert the object into a dict
referenced_tag_dict = referenced_tag_instance.to_dict()
# create an instance of ReferencedTag from a dict
referenced_tag_form_dict = referenced_tag.from_dict(referenced_tag_dict)
```



