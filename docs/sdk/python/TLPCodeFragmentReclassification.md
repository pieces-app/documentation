# TLPCodeFragmentReclassification

Model for ML big query Reclassification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** |  | 
**model** | **str** |  | 
**created** | **str** |  | 
**updates** | [**TLPCodeFragmentReclassificationUpdates**](TLPCodeFragmentReclassificationUpdates) |  | 
**user** | **str** | this is the user that is reclassifying | 
**context** | **str** | this is the application is which this is from. | 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_reclassification import TLPCodeFragmentReclassification

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentReclassification from a JSON string
tlp_code_fragment_reclassification_instance = TLPCodeFragmentReclassification.from_json(json)
# print the JSON string representation of the object
print TLPCodeFragmentReclassification.to_json()

# convert the object into a dict
tlp_code_fragment_reclassification_dict = tlp_code_fragment_reclassification_instance.to_dict()
# create an instance of TLPCodeFragmentReclassification from a dict
tlp_code_fragment_reclassification_form_dict = tlp_code_fragment_reclassification.from_dict(tlp_code_fragment_reclassification_dict)
```



