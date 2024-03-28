# SeededTrackedApplication

A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **str** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] 
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | [optional] 
**automatic_unload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_tracked_application import SeededTrackedApplication

# TODO update the JSON string below
json = "{}"
# create an instance of SeededTrackedApplication from a JSON string
seeded_tracked_application_instance = SeededTrackedApplication.from_json(json)
# print the JSON string representation of the object
print SeededTrackedApplication.to_json()

# convert the object into a dict
seeded_tracked_application_dict = seeded_tracked_application_instance.to_dict()
# create an instance of SeededTrackedApplication from a dict
seeded_tracked_application_form_dict = seeded_tracked_application.from_dict(seeded_tracked_application_dict)
```



