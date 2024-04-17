# DiscoveredHtmlWebpage

This will return assets that were extracted from the html webpage. This will contain the original url so you can double check the results wtih the results you passed in, but it will remain in the same order that it was passed in if used within the /discover/discover/html/webpage endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**assets** | [**DiscoveredAssets**](DiscoveredAssets) |  | 
**url** | **str** |  | 

## Example

```python
from pieces_os_client.models.discovered_html_webpage import DiscoveredHtmlWebpage

# TODO update the JSON string below
json = "{}"
# create an instance of DiscoveredHtmlWebpage from a JSON string
discovered_html_webpage_instance = DiscoveredHtmlWebpage.from_json(json)
# print the JSON string representation of the object
print(DiscoveredHtmlWebpage.to_json())

# convert the object into a dict
discovered_html_webpage_dict = discovered_html_webpage_instance.to_dict()
# create an instance of DiscoveredHtmlWebpage from a dict
discovered_html_webpage_form_dict = discovered_html_webpage.from_dict(discovered_html_webpage_dict)
```


