# StreamedIdentifiers

This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class. && expand the StreamedIdentifier class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[StreamedIdentifier]**](StreamedIdentifier) |  | 

## Example

```python
from pieces_os_client.models.streamed_identifiers import StreamedIdentifiers

# TODO update the JSON string below
json = "{}"
# create an instance of StreamedIdentifiers from a JSON string
streamed_identifiers_instance = StreamedIdentifiers.from_json(json)
# print the JSON string representation of the object
print(StreamedIdentifiers.to_json())

# convert the object into a dict
streamed_identifiers_dict = streamed_identifiers_instance.to_dict()
# create an instance of StreamedIdentifiers from a dict
streamed_identifiers_form_dict = streamed_identifiers.from_dict(streamed_identifiers_dict)
```



