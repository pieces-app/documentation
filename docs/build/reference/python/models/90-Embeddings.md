---
title: Embeddings | Python SDK
---

# Embeddings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iterable** | [**List[Embedding]**](Embedding) |  | 

## Example

```python
from pieces_os_client.models.embeddings import Embeddings

# TODO update the JSON string below
json = "{}"
# create an instance of Embeddings from a JSON string
embeddings_instance = Embeddings.from_json(json)
# print the JSON string representation of the object
print(Embeddings.to_json())

# convert the object into a dict
embeddings_dict = embeddings_instance.to_dict()
# create an instance of Embeddings from a dict
embeddings_form_dict = embeddings.from_dict(embeddings_dict)
```


