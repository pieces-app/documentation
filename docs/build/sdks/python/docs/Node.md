# Node

This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc  created: is here to let us know when the node was attached.  id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**type** | [**NodeTypeEnum**](NodeTypeEnum) |  | 
**root** | **bool** | This is a boolean to let us know if this node is the root or origin of the relationship graph. | 
**created** | [**GroupedTimestamp**](GroupedTimestamp) |  | 

## Example

```python
from pieces_os_client.models.node import Node

# TODO update the JSON string below
json = "{}"
# create an instance of Node from a JSON string
node_instance = Node.from_json(json)
# print the JSON string representation of the object
print Node.to_json()

# convert the object into a dict
node_dict = node_instance.to_dict()
# create an instance of Node from a dict
node_form_dict = node.from_dict(node_dict)
```



