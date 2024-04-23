---
title: SeededRange | Python SDK
---

# SeededRange

This is a preIdentified version of a Range.  conversation: this is here to specify the relationship that we want to set up with the Range.  IE for this case we want to associate a Range with a Conversation.grounding.temporal.workstream. Otherwise, if this was a conversation we would have no way to know what relationship that we want to set up on the conversation w/ the range. (because this will be set up for many relationShip opportunities that have different functionalities)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema) |  | [optional] 
**to** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**var_from** | [**GroupedTimestamp**](GroupedTimestamp) |  | [optional] 
**between** | **bool** |  | [optional] 
**summary** | [**ReferencedWorkstreamSummary**](ReferencedWorkstreamSummary) |  | [optional] 
**conversation** | [**SeededRangeConversationAssociation**](SeededRangeConversationAssociation) |  | [optional] 


