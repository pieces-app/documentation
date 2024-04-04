# TLPCodeFragmentStatistics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**descriptive** | [**TLPCodeFragmentDescriptiveStatistics**](TLPCodeFragmentDescriptiveStatistics) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_statistics import TLPCodeFragmentStatistics

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentStatistics from a JSON string
tlp_code_fragment_statistics_instance = TLPCodeFragmentStatistics.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFragmentStatistics.to_json())

# convert the object into a dict
tlp_code_fragment_statistics_dict = tlp_code_fragment_statistics_instance.to_dict()
# create an instance of TLPCodeFragmentStatistics from a dict
tlp_code_fragment_statistics_form_dict = tlp_code_fragment_statistics.from_dict(tlp_code_fragment_statistics_dict)
```



