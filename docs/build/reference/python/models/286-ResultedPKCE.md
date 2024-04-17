---
title: ResultedPKCE | Python SDK
---

# ResultedPKCE

A Model To Represent the Code Returned from a PKCE Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**code** | **str** | The PKCE Code to be used to access a Token. | 
**state** | **str** | Likely the state that will be returned which should match the requested state as well as the nonce | 

## Example

```python
from pieces_os_client.models.resulted_pkce import ResultedPKCE

# TODO update the JSON string below
json = "{}"
# create an instance of ResultedPKCE from a JSON string
resulted_pkce_instance = ResultedPKCE.from_json(json)
# print the JSON string representation of the object
print(ResultedPKCE.to_json())

# convert the object into a dict
resulted_pkce_dict = resulted_pkce_instance.to_dict()
# create an instance of ResultedPKCE from a dict
resulted_pkce_form_dict = resulted_pkce.from_dict(resulted_pkce_dict)
```


