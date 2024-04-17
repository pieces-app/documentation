---
title: SeededRangeConversationAssociation | Python SDK
---

# SeededRangeConversationAssociation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**reference** | [**ReferencedConversation**](ReferencedConversation) |  | 
**grounding** | [**SeededRangeConversationGroundingAssociation**](SeededRangeConversationGroundingAssociation) |  | [optional] 

## Example

```python
from pieces_os_client.models.seeded_range_conversation_association import SeededRangeConversationAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of SeededRangeConversationAssociation from a JSON string
seeded_range_conversation_association_instance = SeededRangeConversationAssociation.from_json(json)
# print the JSON string representation of the object
print(SeededRangeConversationAssociation.to_json())

# convert the object into a dict
seeded_range_conversation_association_dict = seeded_range_conversation_association_instance.to_dict()
# create an instance of SeededRangeConversationAssociation from a dict
seeded_range_conversation_association_form_dict = seeded_range_conversation_association.from_dict(seeded_range_conversation_association_dict)
```


