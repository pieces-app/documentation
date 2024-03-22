# SeededPKCEADDITIONALPARAMETERS

Append any additional parameter to the end of your request, and it will be sent to the provider. For example, access_type=offline (for Google Refresh Tokens) , display=popup (for Windows Live popup mode).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** |  | [optional] 
**display** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_pkceadditionalparameters import SeededPKCEADDITIONALPARAMETERS

# TODO update the JSON string below
json = "{}"
# create an instance of SeededPKCEADDITIONALPARAMETERS from a JSON string
seeded_pkceadditionalparameters_instance = SeededPKCEADDITIONALPARAMETERS.from_json(json)
# print the JSON string representation of the object
print SeededPKCEADDITIONALPARAMETERS.to_json()

# convert the object into a dict
seeded_pkceadditionalparameters_dict = seeded_pkceadditionalparameters_instance.to_dict()
# create an instance of SeededPKCEADDITIONALPARAMETERS from a dict
seeded_pkceadditionalparameters_form_dict = seeded_pkceadditionalparameters.from_dict(seeded_pkceadditionalparameters_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


