# GitHubDistribution


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**gist** | [**GitHubGistDistribution**](GitHubGistDistribution) |  | [optional] 

## Example

```python
from pieces_os_client.models.git_hub_distribution import GitHubDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of GitHubDistribution from a JSON string
git_hub_distribution_instance = GitHubDistribution.from_json(json)
# print the JSON string representation of the object
print(GitHubDistribution.to_json())

# convert the object into a dict
git_hub_distribution_dict = git_hub_distribution_instance.to_dict()
# create an instance of GitHubDistribution from a dict
git_hub_distribution_form_dict = git_hub_distribution.from_dict(git_hub_distribution_dict)
```


