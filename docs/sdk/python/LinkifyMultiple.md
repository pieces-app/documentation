# LinkifyMultiple

This is the incoming linkify model.  if access is PRIVATE then please provide and array of users to enable the link for.  Assumption, all assets are already backed up to the cloud. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets** | **List[str]** | This is an array or string that represents an already backed up asset. That will be added to a collection. | 
**users** | [**List[SeededUser]**](SeededUser) | this is an array of users. | [optional] 
**access** | [**AccessEnum**](AccessEnum) |  | 
**name** | **str** | optionally can give the collection a name if you want. | [optional] 

## Example

```python
from pieces_os_client.models.linkify_multiple import LinkifyMultiple

# TODO update the JSON string below
json = "{}"
# create an instance of LinkifyMultiple from a JSON string
linkify_multiple_instance = LinkifyMultiple.from_json(json)
# print the JSON string representation of the object
print LinkifyMultiple.to_json()

# convert the object into a dict
linkify_multiple_dict = linkify_multiple_instance.to_dict()
# create an instance of LinkifyMultiple from a dict
linkify_multiple_form_dict = linkify_multiple.from_dict(linkify_multiple_dict)
```



