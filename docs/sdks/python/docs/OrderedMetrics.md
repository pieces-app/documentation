# OrderedMetrics

This is a returnable for the metrics/formats/ordered

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**ordered** | **List[str]** |  | 

## Example

```python
from pieces_os_client.models.ordered_metrics import OrderedMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of OrderedMetrics from a JSON string
ordered_metrics_instance = OrderedMetrics.from_json(json)
# print the JSON string representation of the object
print OrderedMetrics.to_json()

# convert the object into a dict
ordered_metrics_dict = ordered_metrics_instance.to_dict()
# create an instance of OrderedMetrics from a dict
ordered_metrics_form_dict = ordered_metrics.from_dict(ordered_metrics_dict)
```
[[Back to Model list]](../README#documentation-for-models) [[Back to API list]](../README#documentation-for-api-endpoints) [[Back to README]](../README)


