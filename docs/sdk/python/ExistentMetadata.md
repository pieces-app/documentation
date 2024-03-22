# ExistentMetadata

This is a shared output model for all the exists endpoints: /tags/exists : value here is the tag that you want to see if it exists. /websites/exists: value here is the url you want to see if it exists

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**value** | **str** |  | 

## Example

```python
from pieces_os_client.models.existent_metadata import ExistentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ExistentMetadata from a JSON string
existent_metadata_instance = ExistentMetadata.from_json(json)
# print the JSON string representation of the object
print ExistentMetadata.to_json()

# convert the object into a dict
existent_metadata_dict = existent_metadata_instance.to_dict()
# create an instance of ExistentMetadata from a dict
existent_metadata_form_dict = existent_metadata.from_dict(existent_metadata_dict)
```



