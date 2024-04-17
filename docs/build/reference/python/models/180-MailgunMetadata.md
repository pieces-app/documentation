---
title: MailgunMetadata | Python SDK
---

# MailgunMetadata

TODO add additional properties. TODO eventually modify this model to look like the response from Mailgun.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**message_id** | **str** | This is the id given to us from mailgun when the email was sent successfully. | 

## Example

```python
from pieces_os_client.models.mailgun_metadata import MailgunMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of MailgunMetadata from a JSON string
mailgun_metadata_instance = MailgunMetadata.from_json(json)
# print the JSON string representation of the object
print(MailgunMetadata.to_json())

# convert the object into a dict
mailgun_metadata_dict = mailgun_metadata_instance.to_dict()
# create an instance of MailgunMetadata from a dict
mailgun_metadata_form_dict = mailgun_metadata.from_dict(mailgun_metadata_dict)
```


