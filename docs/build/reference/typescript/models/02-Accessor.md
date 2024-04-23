---
title: Accessor | TypeScript SDK
---


# Accessor

This is used to determine who has accessed a share. and how many times.  The user here is the user that accessed this Piece.(optional) if undefined then this user was not logged in yet.

## Properties

Name | Type
------------ | -------------
**schema** | [**EmbeddedModelSchema**](EmbeddedModelSchema)
**id** | **string**
**os** | **string**
**share** | **string**
**count** | **number**
**user** | [**FlattenedUserProfile**](FlattenedUserProfile)


