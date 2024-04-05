# ReferencedAnchor

This is the referenced version of a Anchor, main used for the uuid.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedAnchor**](FlattenedAnchor) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_anchor import ReferencedAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedAnchor from a JSON string
referenced_anchor_instance = ReferencedAnchor.from_json(json)
# print the JSON string representation of the object
print(ReferencedAnchor.to_json())

# convert the object into a dict
referenced_anchor_dict = referenced_anchor_instance.to_dict()
# create an instance of ReferencedAnchor from a dict
referenced_anchor_form_dict = referenced_anchor.from_dict(referenced_anchor_dict)
```



