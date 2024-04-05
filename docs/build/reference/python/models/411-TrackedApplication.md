# TrackedApplication

A Model to describe what application a format/analytics event originated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** | The ID of the tracked application. | 
**name** | [**ApplicationNameEnum**](ApplicationNameEnum) |  | 
**version** | **str** | This is the specific version number 0.0.0 | 
**platform** | [**PlatformEnum**](PlatformEnum) |  | 
**automatic_unload** | **bool** | This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false. | [optional] 

## Example

```python
from pieces_os_client.models.tracked_application import TrackedApplication

# TODO update the JSON string below
json = "{}"
# create an instance of TrackedApplication from a JSON string
tracked_application_instance = TrackedApplication.from_json(json)
# print the JSON string representation of the object
print(TrackedApplication.to_json())

# convert the object into a dict
tracked_application_dict = tracked_application_instance.to_dict()
# create an instance of TrackedApplication from a dict
tracked_application_form_dict = tracked_application.from_dict(tracked_application_dict)
```



