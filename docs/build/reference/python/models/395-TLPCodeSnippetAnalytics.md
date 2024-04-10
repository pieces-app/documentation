# TLPCodeSnippetAnalytics


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**statistics** | [**TLPCodeFragmentStatistics**](TLPCodeFragmentStatistics) |  | [optional] 
**classification** | [**TLPCodeFragmentClassification**](TLPCodeFragmentClassification) |  | [optional] 
**reclassification** | [**TLPCodeFragmentReclassification**](TLPCodeFragmentReclassification) |  | [optional] 
**suggested** | [**TLPCodeSnippetSuggestedInteractions**](TLPCodeSnippetSuggestedInteractions) |  | [optional] 
**tagify** | [**TLPCodeFragmentTagify**](TLPCodeFragmentTagify) |  | [optional] 
**description** | [**TLPCodeFragmentDescription**](TLPCodeFragmentDescription) |  | [optional] 

## Example

```python
from pieces_os_client.models.tlp_code_snippet_analytics import TLPCodeSnippetAnalytics

# TODO update the JSON string below
json = "{}"
# create an instance of TLPCodeSnippetAnalytics from a JSON string
tlp_code_snippet_analytics_instance = TLPCodeSnippetAnalytics.from_json(json)
# print the JSON string representation of the object
print(TLPCodeSnippetAnalytics.to_json())

# convert the object into a dict
tlp_code_snippet_analytics_dict = tlp_code_snippet_analytics_instance.to_dict()
# create an instance of TLPCodeSnippetAnalytics from a dict
tlp_code_snippet_analytics_form_dict = tlp_code_snippet_analytics.from_dict(tlp_code_snippet_analytics_dict)
```


