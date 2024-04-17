---
title: RelevantQGPTSeed | Python SDK
---

# RelevantQGPTSeed

This is a generic model used, to wrap a seed, as well as give an identifier used to further identifiy this snippet.  Seed is optional here because you may just want to provide the id, and not the original seed.  id is also optional here as you may provide an id or not here.(however with specific endpoint this ID is a guarentee.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | [optional] 
**seed** | [**Seed**](Seed) |  | [optional] 
**path** | **str** | This is an optional file path | [optional] 
**asset** | [**ReferencedAsset**](ReferencedAsset) |  | [optional] 

## Example

```python
from pieces_os_client.models.relevant_qgpt_seed import RelevantQGPTSeed

# TODO update the JSON string below
json = "{}"
# create an instance of RelevantQGPTSeed from a JSON string
relevant_qgpt_seed_instance = RelevantQGPTSeed.from_json(json)
# print the JSON string representation of the object
print(RelevantQGPTSeed.to_json())

# convert the object into a dict
relevant_qgpt_seed_dict = relevant_qgpt_seed_instance.to_dict()
# create an instance of RelevantQGPTSeed from a dict
relevant_qgpt_seed_form_dict = relevant_qgpt_seed.from_dict(relevant_qgpt_seed_dict)
```


