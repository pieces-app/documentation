# FlattenedShares

This is just an iterable of our individual share models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**iterable** | [**List[FlattenedShare]**](FlattenedShare) |  | 
**score** | [**Score**](Score) |  | [optional] 

## Example

```python
from pieces_os_client.models.flattened_shares import FlattenedShares

# TODO update the JSON string below
json = "{}"
# create an instance of FlattenedShares from a JSON string
flattened_shares_instance = FlattenedShares.from_json(json)
# print the JSON string representation of the object
print(FlattenedShares.to_json())

# convert the object into a dict
flattened_shares_dict = flattened_shares_instance.to_dict()
# create an instance of FlattenedShares from a dict
flattened_shares_form_dict = flattened_shares.from_dict(flattened_shares_dict)
```


