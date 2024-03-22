# Context

A Context that is returned from almost all calls to the ContextAPI

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**os** | **str** | This is th UUID of the OS that this context is currently connected to. This attempts to be the same as Segment&#39;s anonmyousId feild. It is attempted to be set at initial installation at Pieces/.identity/.os | 
**application** | [**Application**](Application) |  | 
**health** | [**Health**](Health) |  | 
**user** | [**UserProfile**](UserProfile) |  | [optional] 

## Example

```python
from pieces_os_client.models.context import Context

# TODO update the JSON string below
json = "{}"
# create an instance of Context from a JSON string
context_instance = Context.from_json(json)
# print the JSON string representation of the object
print Context.to_json()

# convert the object into a dict
context_dict = context_instance.to_dict()
# create an instance of Context from a dict
context_form_dict = context.from_dict(context_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


