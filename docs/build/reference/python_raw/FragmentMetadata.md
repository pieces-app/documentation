# FragmentMetadata

This is a model for metadata of a file!

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ext** | [**ClassificationSpecificEnum**](ClassificationSpecificEnum) |  | [optional] 

## Example

```python
from pieces_os_client.models.fragment_metadata import FragmentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FragmentMetadata from a JSON string
fragment_metadata_instance = FragmentMetadata.from_json(json)
# print the JSON string representation of the object
print FragmentMetadata.to_json()

# convert the object into a dict
fragment_metadata_dict = fragment_metadata_instance.to_dict()
# create an instance of FragmentMetadata from a dict
fragment_metadata_form_dict = fragment_metadata.from_dict(fragment_metadata_dict)
```



