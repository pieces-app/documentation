---
title: QGPTHintsInput | TypeScript SDK
---


# QGPTHintsInput

Query is your hints question. Relevant is the relevant snippets. Answer is the previous answer.(that we are asking a hint up for.)  Query and Answer are both optional here because, you may pass over relevant snippets over ahead of hand if you already have them to answer your questions.

## Properties

Name | Type
------------ | -------------
**query** | **string**
**answer** | [**QGPTQuestionAnswer**](QGPTQuestionAnswer)
**relevant** | [**RelevantQGPTSeeds**](RelevantQGPTSeeds)
**application** | **string**
**model** | **string**


