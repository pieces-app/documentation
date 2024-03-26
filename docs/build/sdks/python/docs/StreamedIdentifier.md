# StreamedIdentifier

This is currently only used within /assets/steam/identifiers && /conversations/steam/identifiers but can be used with other as well, if we want to expand this class.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 
**conversation** | [**ReferencedConversation**](ReferencedConversation) |  | [optional] 
**deleted** | **bool** | This is a specific bool that will let us know if we deleted an Identifierfrom the db. | [optional] 

## Example

```python
from pieces_os_client.models.streamed_identifier import StreamedIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of StreamedIdentifier from a JSON string
streamed_identifier_instance = StreamedIdentifier.from_json(json)
# print the JSON string representation of the object
print StreamedIdentifier.to_json()

# convert the object into a dict
streamed_identifier_dict = streamed_identifier_instance.to_dict()
# create an instance of StreamedIdentifier from a dict
streamed_identifier_form_dict = streamed_identifier.from_dict(streamed_identifier_dict)
```



