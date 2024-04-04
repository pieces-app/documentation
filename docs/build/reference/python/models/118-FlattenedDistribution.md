# FlattenedDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**share** | **str** | This is the UUId of the share. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mailgun** | [**MailgunDistribution**](MailgunDistribution) |  | [optional] 
**github** | [**GitHubDistribution**](GitHubDistribution) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_distribution import FlattenedDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedDistribution from a JSON string
flattened_distribution_instance = FlattenedDistribution.from_json(json)
# print the JSON string representation of the object
print(FlattenedDistribution.to_json())

# convert the object into a dict
flattened_distribution_dict = flattened_distribution_instance.to_dict()
# create an instance of FlattenedDistribution from a dict
flattened_distribution_form_dict = flattened_distribution.from_dict(flattened_distribution_dict)
```



