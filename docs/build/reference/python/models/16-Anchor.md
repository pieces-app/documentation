# Anchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**name** | **str** |  | [optional] 
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | 
**watch** | **bool** |  | [optional] 
**points** | [**FlattenedAnchorPoints**](FlattenedAnchorPoints) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 

## Example

```python
from pieces_os_client.models.anchor import Anchor

# TODO update the JSON string below
json = "{}"
# create an instance of Anchor from a JSON string
anchor_instance = Anchor.from_json(json)
# print the JSON string representation of the object
print(Anchor.to_json())

# convert the object into a dict
anchor_dict = anchor_instance.to_dict()
# create an instance of Anchor from a dict
anchor_form_dict = anchor.from_dict(anchor_dict)
```



