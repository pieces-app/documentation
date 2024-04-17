---
title: SeededWebsite | Python SDK
---

# SeededWebsite

This is the minimum information required to create a website for a specific asset.  you can optionally add an asset, or person id to attach this website directly to it  TODO consider updating these asset,format to referenced Models

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**asset** | **str** | This is the specific asset that this website is going to get attached to!! | [optional] 
**conversation** | **str** | This is the specific conversation that this website is going to get attached to!! | [optional] 
**url** | **str** | this is the url of the website. | 
**name** | **str** | name of the website.(customizable and updateable as well.) | 
**mechanism** | [**MechanismEnum**](MechanismEnum) |  | [optional] 
**person** | **str** | this is a uuid of a person that we are going to add the website too. | [optional] 

## Example

```python
from pieces_os_client.models.seeded_website import SeededWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of SeededWebsite from a JSON string
seeded_website_instance = SeededWebsite.from_json(json)
# print the JSON string representation of the object
print(SeededWebsite.to_json())

# convert the object into a dict
seeded_website_dict = seeded_website_instance.to_dict()
# create an instance of SeededWebsite from a dict
seeded_website_form_dict = seeded_website.from_dict(seeded_website_dict)
```


