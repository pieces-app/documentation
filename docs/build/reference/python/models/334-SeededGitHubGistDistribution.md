# SeededGitHubGistDistribution

This is the minimum information needed to distribute a Piece to a Gist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**recipients** | [**Recipients**](Recipients) |  | [optional] 
**public** | **bool** | we will default to true | [optional] 
**description** | **str** | This is the description of the Gist Distribution | [optional] 
**name** | **str** | This is the name of the gist you will add. | 

## Example

```python
from pieces_os_client.models.seeded_git_hub_gist_distribution import SeededGitHubGistDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of SeededGitHubGistDistribution from a JSON string
seeded_git_hub_gist_distribution_instance = SeededGitHubGistDistribution.from_json(json)
# print the JSON string representation of the object
print(SeededGitHubGistDistribution.to_json())

# convert the object into a dict
seeded_git_hub_gist_distribution_dict = seeded_git_hub_gist_distribution_instance.to_dict()
# create an instance of SeededGitHubGistDistribution from a dict
seeded_git_hub_gist_distribution_form_dict = seeded_git_hub_gist_distribution.from_dict(seeded_git_hub_gist_distribution_dict)
```


