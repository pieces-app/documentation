---
title: SeededScoreIncrement | Python SDK
---

# SeededScoreIncrement

This is the body for a respective scores increment,  This will enable us to know what material we want to increment, all of which are optional, if it is defined we will attempt to increment the material.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | [**SeededScore**](SeededScore) |  | [optional] 
**assets** | [**SeededScore**](SeededScore) |  | [optional] 
**website** | [**SeededScore**](SeededScore) |  | [optional] 
**websites** | [**SeededScore**](SeededScore) |  | [optional] 
**anchor** | [**SeededScore**](SeededScore) |  | [optional] 
**anchors** | [**SeededScore**](SeededScore) |  | [optional] 
**anchor_point** | [**SeededScore**](SeededScore) |  | [optional] 
**anchor_points** | [**SeededScore**](SeededScore) |  | [optional] 
**annotation** | [**SeededScore**](SeededScore) |  | [optional] 
**annotations** | [**SeededScore**](SeededScore) |  | [optional] 
**conversation** | [**SeededScore**](SeededScore) |  | [optional] 
**conversations** | [**SeededScore**](SeededScore) |  | [optional] 
**conversation_message** | [**SeededScore**](SeededScore) |  | [optional] 
**conversation_messages** | [**SeededScore**](SeededScore) |  | [optional] 
**share** | [**SeededScore**](SeededScore) |  | [optional] 
**shares** | [**SeededScore**](SeededScore) |  | [optional] 
**sensitive** | [**SeededScore**](SeededScore) |  | [optional] 
**sensitives** | [**SeededScore**](SeededScore) |  | [optional] 
**hint** | [**SeededScore**](SeededScore) |  | [optional] 
**hints** | [**SeededScore**](SeededScore) |  | [optional] 
**person** | [**SeededScore**](SeededScore) |  | [optional] 
**persons** | [**SeededScore**](SeededScore) |  | [optional] 
**tag** | [**SeededScore**](SeededScore) |  | [optional] 
**tags** | [**SeededScore**](SeededScore) |  | [optional] 
**workstream_summary** | [**SeededScore**](SeededScore) |  | [optional] 
**workstream_summaries** | [**SeededScore**](SeededScore) |  | [optional] 
**workstream_events** | [**SeededScore**](SeededScore) |  | [optional] 
**workstream_event** | [**SeededScore**](SeededScore) |  | [optional] 
**ranges** | [**SeededScore**](SeededScore) |  | [optional] 
**range** | [**SeededScore**](SeededScore) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_score_increment import SeededScoreIncrement

# TODO update the JSON string below
json = "{}"
# create an instance of SeededScoreIncrement from a JSON string
seeded_score_increment_instance = SeededScoreIncrement.from_json(json)
# print the JSON string representation of the object
print(SeededScoreIncrement.to_json())

# convert the object into a dict
seeded_score_increment_dict = seeded_score_increment_instance.to_dict()
# create an instance of SeededScoreIncrement from a dict
seeded_score_increment_form_dict = seeded_score_increment.from_dict(seeded_score_increment_dict)
```


