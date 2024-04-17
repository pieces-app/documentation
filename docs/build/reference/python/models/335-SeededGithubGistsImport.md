---
title: SeededGithubGistsImport | Python SDK
---

# SeededGithubGistsImport

This is the body of the /github/gists/import,  by default we will look for everything from your private gists, (TODO hook up public gists.)&& get clever  currently we will not ensure that this is a good pieces for you but we will just get you the gist and let you do what you want with it(room for improvement, if we want to layer in advanced pieces discovery)  For the future, we might want to add a max number of assets that are returned from this.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**application** | **str** | application id. | 
**public** | **bool** | This will default to false.(ie private), currently not supporting pulling public gists. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_github_gists_import import SeededGithubGistsImport

# TODO update the JSON string below
json = "{}"
# create an instance of SeededGithubGistsImport from a JSON string
seeded_github_gists_import_instance = SeededGithubGistsImport.from_json(json)
# print the JSON string representation of the object
print(SeededGithubGistsImport.to_json())

# convert the object into a dict
seeded_github_gists_import_dict = seeded_github_gists_import_instance.to_dict()
# create an instance of SeededGithubGistsImport from a dict
seeded_github_gists_import_form_dict = seeded_github_gists_import.from_dict(seeded_github_gists_import_dict)
```


