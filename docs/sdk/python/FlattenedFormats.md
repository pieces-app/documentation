# FlattenedFormats

A collection of Formats specific to the authenticated user. [DAG Compatible - Directed Acyclic Graph Data Structure]  FlattenedFormats prevent Cycles in Reference because all outbound references are strings as opposed to crosspollinated objects. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[ReferencedFormat]**](ReferencedFormat) |  | 

## Example

```python
from pieces_os_client.models.flattened_formats import FlattenedFormats

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedFormats from a JSON string
flattened_formats_instance = FlattenedFormats.from_json(json)
# print the JSON string representation of the object
print FlattenedFormats.to_json()

# convert the object into a dict
flattened_formats_dict = flattened_formats_instance.to_dict()
# create an instance of FlattenedFormats from a dict
flattened_formats_form_dict = flattened_formats.from_dict(flattened_formats_dict)
```



