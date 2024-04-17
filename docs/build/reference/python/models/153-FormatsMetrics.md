# FormatsMetrics



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[FormatMetric]**](FormatMetric) |  | 

## Example

```python
from pieces_os_client.models.formats_metrics import FormatsMetrics

# TODO update the JSON string below
json = "{}"
# create an instance of FormatsMetrics from a JSON string
formats_metrics_instance = FormatsMetrics.from_json(json)
# print the JSON string representation of the object
print(FormatsMetrics.to_json())

# convert the object into a dict
formats_metrics_dict = formats_metrics_instance.to_dict()
# create an instance of FormatsMetrics from a dict
formats_metrics_form_dict = formats_metrics.from_dict(formats_metrics_dict)
```


