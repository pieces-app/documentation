# ReferencedWebsite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**id** | **str** |  | 
**reference** | [**FlattenedWebsite**](FlattenedWebsite) |  | [optional] 

## Example

```python
from pieces_os_client.models.referenced_website import ReferencedWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of ReferencedWebsite from a JSON string
referenced_website_instance = ReferencedWebsite.from_json(json)
# print the JSON string representation of the object
print(ReferencedWebsite.to_json())

# convert the object into a dict
referenced_website_dict = referenced_website_instance.to_dict()
# create an instance of ReferencedWebsite from a dict
referenced_website_form_dict = referenced_website.from_dict(referenced_website_dict)
```


