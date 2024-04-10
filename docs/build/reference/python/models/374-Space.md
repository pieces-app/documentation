# Space

This is used in the TrackedAssetsEventSearchMetadata

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **int** | This is the size of your current catalog.(number of assets) | [optional] 
**duration** | **int** | this is the number in ms it took to run search. | [optional] 

## Example

```python
from pieces_os_client.models.space import Space

# TODO update the JSON string below
json = "{}"
# create an instance of Space from a JSON string
space_instance = Space.from_json(json)
# print the JSON string representation of the object
print(Space.to_json())

# convert the object into a dict
space_dict = space_instance.to_dict()
# create an instance of Space from a dict
space_form_dict = space.from_dict(space_dict)
```


