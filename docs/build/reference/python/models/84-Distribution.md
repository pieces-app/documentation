---
title: Distribution | Python SDK
---

# Distribution

This is a fully referenced version of a Distribution. TODO add additional distributions such as slack, google_chat, ...etc

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**share** | [**FlattenedShare**](FlattenedShare) |  | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**updated** | [**GroupedTimestamp**](GroupedTimestamp) |  | 
**deleted** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**mailgun** | [**MailgunDistribution**](MailgunDistribution) |  | [optional] 
**github** | [**GitHubDistribution**](GitHubDistribution) |  | [optional] 

## Example

```python
from pieces_os_client.models.distribution import Distribution

# TODO update the JSON string below
json = "{}"
# create an instance of Distribution from a JSON string
distribution_instance = Distribution.from_json(json)
# print the JSON string representation of the object
print(Distribution.to_json())

# convert the object into a dict
distribution_dict = distribution_instance.to_dict()
# create an instance of Distribution from a dict
distribution_form_dict = distribution.from_dict(distribution_dict)
```


