# TLPCodeFragmentDescription

Model for ML big query Code Description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | This is the stringified json of a TLPDescription object | [optional] 
**asset** | **str** | This is the asset id. | 
**created** | **str** | timestamp of creation | 
**model** | **str** | this is the model version | 
**latency** | **float** | the time it takes to run this model. | [optional] 
**user** | **str** | the uuid of the user the description was created for. | 
**context** | **str** | the application this description was created from. | [optional] 
**os** | **str** | This is the UUID of the OS that this context is currently connected to. | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_description import TLPCodeFragmentDescription

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentDescription from a JSON string
tlp_code_fragment_description_instance = TLPCodeFragmentDescription.from_json(json)
# print the JSON string representation of the object
print TLPCodeFragmentDescription.to_json()

# convert the object into a dict
tlp_code_fragment_description_dict = tlp_code_fragment_description_instance.to_dict()
# create an instance of TLPCodeFragmentDescription from a dict
tlp_code_fragment_description_form_dict = tlp_code_fragment_description.from_dict(tlp_code_fragment_description_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


