# DetectedExternalApplication

This is a detected External Application that comes from our endpoint that will get a snapshot of the installed applications on your machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | **str** | this is the name of the application | 
**version** | **str** |  | [optional] 

## Example

```python
from pieces_os_client.models.detected_external_application import DetectedExternalApplication

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedExternalApplication from a JSON string
detected_external_application_instance = DetectedExternalApplication.from_json(json)
# print the JSON string representation of the object
print DetectedExternalApplication.to_json()

# convert the object into a dict
detected_external_application_dict = detected_external_application_instance.to_dict()
# create an instance of DetectedExternalApplication from a dict
detected_external_application_form_dict = detected_external_application.from_dict(detected_external_application_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


