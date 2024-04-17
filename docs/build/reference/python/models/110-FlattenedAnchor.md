# FlattenedAnchor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**type** | [**AnchorTypeEnum**](AnchorTypeEnum) |  | 
**watch** | **bool** |  | [optional] 
**points** | [**FlattenedAnchorPoints**](FlattenedAnchorPoints) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**assets** | [**FlattenedAssets**](FlattenedAssets) |  | [optional] 
**name** | **str** |  | [optional] 
**annotations** | [**FlattenedAnnotations**](FlattenedAnnotations) |  | [optional] 
**conversations** | [**FlattenedConversations**](FlattenedConversations) |  | [optional] 
**score** | [**Score**](Score) |  | [optional] 
**summaries** | [**FlattenedWorkstreamSummaries**](FlattenedWorkstreamSummaries) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_anchor import FlattenedAnchor

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedAnchor from a JSON string
flattened_anchor_instance = FlattenedAnchor.from_json(json)
# print the JSON string representation of the object
print(FlattenedAnchor.to_json())

# convert the object into a dict
flattened_anchor_dict = flattened_anchor_instance.to_dict()
# create an instance of FlattenedAnchor from a dict
flattened_anchor_form_dict = flattened_anchor.from_dict(flattened_anchor_dict)
```


