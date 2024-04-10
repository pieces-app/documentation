# Embedding



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw** | **List[float]** | this is the raw value of the embedding | 
**model** | [**Model**](Model) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 

## Example

```python
from pieces_os_client.models.embedding import Embedding

# TODO update the JSON string below
json = "{}"
# create an instance of Embedding from a JSON string
embedding_instance = Embedding.from_json(json)
# print the JSON string representation of the object
print(Embedding.to_json())

# convert the object into a dict
embedding_dict = embedding_instance.to_dict()
# create an instance of Embedding from a dict
embedding_form_dict = embedding.from_dict(embedding_dict)
```


