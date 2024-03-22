# ReferencedShare

This is a [DAG SAFE] version of a share. with just a required share ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedShare**](FlattenedShare) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_share import ReferencedShare

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedShare from a JSON string
referenced_share_instance = ReferencedShare.from_json(json)
# print the JSON string representation of the object
print ReferencedShare.to_json()

# convert the object into a dict
referenced_share_dict = referenced_share_instance.to_dict()
# create an instance of ReferencedShare from a dict
referenced_share_form_dict = referenced_share.from_dict(referenced_share_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


