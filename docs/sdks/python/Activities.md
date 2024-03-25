# Activities

This is the plural of activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[Activity]**](Activity) |  | 

## Example

```python
from pieces_os_client.models.activities import Activities

# TODO update the JSON string below
json = "{}"
# create an instance of Activities from a JSON string
activities_instance = Activities.from_json(json)
# print the JSON string representation of the object
print Activities.to_json()

# convert the object into a dict
activities_dict = activities_instance.to_dict()
# create an instance of Activities from a dict
activities_form_dict = activities.from_dict(activities_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


