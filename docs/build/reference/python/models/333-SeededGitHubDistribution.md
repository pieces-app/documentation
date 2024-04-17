---
title: SeededGitHubDistribution | Python SDK
---

# SeededGitHubDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**gist** | [**SeededGitHubGistDistribution**](SeededGitHubGistDistribution) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_git_hub_distribution import SeededGitHubDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of SeededGitHubDistribution from a JSON string
seeded_git_hub_distribution_instance = SeededGitHubDistribution.from_json(json)
# print the JSON string representation of the object
print(SeededGitHubDistribution.to_json())

# convert the object into a dict
seeded_git_hub_distribution_dict = seeded_git_hub_distribution_instance.to_dict()
# create an instance of SeededGitHubDistribution from a dict
seeded_git_hub_distribution_form_dict = seeded_git_hub_distribution.from_dict(seeded_git_hub_distribution_dict)
```


