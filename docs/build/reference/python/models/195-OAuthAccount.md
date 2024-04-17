# OAuthAccount

A Model to support account creation to Auth0's Database.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The client_id of your client. | 
**email** | **str** | The user&#39;s email address. | 
**connection** | **str** | The name of the database configured to your client. | 
**username** | **str** | The user&#39;s username. Only valid if the connection requires a username. | 
**given_name** | **str** | The user&#39;s given name(s). | 
**family_name** | **str** | The user&#39;s family name(s). | 
**name** | **str** | The user&#39;s full name. | 
**picture** | **str** | A URI pointing to the user&#39;s picture. | 
**nickname** | **str** | The user&#39;s nickname. | 

## Example

```python
from pieces_os_client.models.o_auth_account import OAuthAccount

# TODO update the JSON string below
json = "{}"
# create an instance of OAuthAccount from a JSON string
o_auth_account_instance = OAuthAccount.from_json(json)
# print the JSON string representation of the object
print(OAuthAccount.to_json())

# convert the object into a dict
o_auth_account_dict = o_auth_account_instance.to_dict()
# create an instance of OAuthAccount from a dict
o_auth_account_form_dict = o_auth_account.from_dict(o_auth_account_dict)
```


