# SeededDiscoverableHtmlWebpage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**url** | **str** | The route of the page  | 
**page** | **str** | page&#39;s html as a string | 

## Example

```python
from pieces_os_client.models.seeded_discoverable_html_webpage import SeededDiscoverableHtmlWebpage

# TODO update the JSON string below
json = "{}"
# create an instance of SeededDiscoverableHtmlWebpage from a JSON string
seeded_discoverable_html_webpage_instance = SeededDiscoverableHtmlWebpage.from_json(json)
# print the JSON string representation of the object
print(SeededDiscoverableHtmlWebpage.to_json())

# convert the object into a dict
seeded_discoverable_html_webpage_dict = seeded_discoverable_html_webpage_instance.to_dict()
# create an instance of SeededDiscoverableHtmlWebpage from a dict
seeded_discoverable_html_webpage_form_dict = seeded_discoverable_html_webpage.from_dict(seeded_discoverable_html_webpage_dict)
```


