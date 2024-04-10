# TLPCodeFragmentTagify


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code** | [**TLPCodeSnippetTagifyCode**](TLPCodeSnippetTagifyCode) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_fragment_tagify import TLPCodeFragmentTagify

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeFragmentTagify from a JSON string
tlp_code_fragment_tagify_instance = TLPCodeFragmentTagify.from_json(json)
# print the JSON string representation of the object
print(TLPCodeFragmentTagify.to_json())

# convert the object into a dict
tlp_code_fragment_tagify_dict = tlp_code_fragment_tagify_instance.to_dict()
# create an instance of TLPCodeFragmentTagify from a dict
tlp_code_fragment_tagify_form_dict = tlp_code_fragment_tagify.from_dict(tlp_code_fragment_tagify_dict)
```


