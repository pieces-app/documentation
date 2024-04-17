---
title: Application | Python SDK
---

# Application

A Model to describe what application a format/analytics event originated.  mechanism: This will let us know where this came from. ie.only 2 enums are used here or else throw and error. default mechanism here is MANUAL- meaning that this came from our user Connecting an application. INTERNAL - means that this came from a shareable link

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The ID of the application at the device level | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **str** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**onboarded** | **bool** |  | 
**privacy** | [**PrivacyEnum**](PrivacyEnum) |  | 
**capabilities** | [**CapabilitiesEnum**](CapabilitiesEnum) |  | [optional] 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**automatic_unload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 

## Example

```python
from pieces_os_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_form_dict = application.from_dict(application_dict)
```


