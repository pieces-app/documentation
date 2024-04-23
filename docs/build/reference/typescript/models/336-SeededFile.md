---
title: SeededFile | TypeScript SDK
---


# SeededFile

This is a base model for a File(Seeded).  We will Throw an Error, if the text and the bytes properties are both null && if both the text and bytes properties are both defined. Ensure that you pass either a text or bytes property.  bytes and string are both optionl but, if both are null or both are defined we will throw an error. So You will be required to pass one or the other, NOT both.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**bytes** | [**TransferableBytes**](TransferableBytes)
**string** | [**TransferableString**](TransferableString)
**metadata** | [**FileMetadata**](FileMetadata)


