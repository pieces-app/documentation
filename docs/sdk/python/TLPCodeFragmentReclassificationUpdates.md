# TLPCodeFragmentReclassificationUpdates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**previous** | [**Classification**](Classification) |  | 
**current** | [**Classification**](Classification) |  | 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_reclassification_updates import TLPCodeFragmentReclassificationUpdates

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentReclassificationUpdates from a JSON string
tlp_code_fragment_reclassification_updates_instance = TLPCodeFragmentReclassificationUpdates.from_json(json)
# print the JSON string representation of the object
print TLPCodeFragmentReclassificationUpdates.to_json()

# convert the object into a dict
tlp_code_fragment_reclassification_updates_dict = tlp_code_fragment_reclassification_updates_instance.to_dict()
# create an instance of TLPCodeFragmentReclassificationUpdates from a dict
tlp_code_fragment_reclassification_updates_form_dict = tlp_code_fragment_reclassification_updates.from_dict(tlp_code_fragment_reclassification_updates_dict)
```



