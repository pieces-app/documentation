---
title: QGPTRelevanceOutput | Python SDK
---

# QGPTRelevanceOutput

This is the returned value from /code_gpt/relevance.  This will return the snippets that we found are relevant to the query you provided.  (optional) answer: in the case you provided question: true, then we will also return to you the answer to your question.  Note: - relevant: this is required property and will represent the relevant snippets, to your specific query.(NOTE: these snippet will all have respective id's and seed defined. even though id and seed are optional)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**answer** | [**QGPTQuestionOutput**](QGPTQuestionOutput) |  | [optional] 
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds) |  | 

## Example

```python
from pieces_os_client.models.qgpt_relevance_output import QGPTRelevanceOutput

# TODO update the JSON string below
json = "{}"
# create an instance of QGPTRelevanceOutput from a JSON string
qgpt_relevance_output_instance = QGPTRelevanceOutput.from_json(json)
# print the JSON string representation of the object
print(QGPTRelevanceOutput.to_json())

# convert the object into a dict
qgpt_relevance_output_dict = qgpt_relevance_output_instance.to_dict()
# create an instance of QGPTRelevanceOutput from a dict
qgpt_relevance_output_form_dict = qgpt_relevance_output.from_dict(qgpt_relevance_output_dict)
```


