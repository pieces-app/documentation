# DetectedExternalApplications

This is used as the returnable for the /applications/external && /applications/external/related endpoints.  This will return an iterable of Deteched Application a detected Application is an application that is currently installed on your machine.  the /applications/external/related endpoint, will return a subset of the applications returned mainly applications that we detect are Pieces Applications that you have yet to install + names of applications where Pieces is coming soon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[DetectedExternalApplication]**](DetectedExternalApplication) |  | 

## Example

```python
from pieces_os_client.models.detected_external_applications import DetectedExternalApplications

# TODO update the JSON string below
json = "{}"
# create an instance of DetectedExternalApplications from a JSON string
detected_external_applications_instance = DetectedExternalApplications.from_json(json)
# print the JSON string representation of the object
print(DetectedExternalApplications.to_json())

# convert the object into a dict
detected_external_applications_dict = detected_external_applications_instance.to_dict()
# create an instance of DetectedExternalApplications from a dict
detected_external_applications_form_dict = detected_external_applications.from_dict(detected_external_applications_dict)
```



