---
title: API Reference
id: sdk
description: Wing SDK API Reference
keywords: [Wing sdk, sdk, Wing API Reference]
---

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Bucket <a name="Bucket" id="@winglang/sdk.cloud.Bucket"></a>

**Inflight client:** [@winglang/sdk.cloud.IBucketClient](#@winglang/sdk.cloud.IBucketClient)

Represents a cloud object store.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Bucket.Initializer"></a>

```wing
bring cloud;

new cloud.Bucket(props?: BucketProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Bucket.Initializer.parameter.props">props</a></code> | <code>cloud.BucketProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Bucket.Initializer.parameter.props"></a>

- *Type:* cloud.BucketProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Bucket.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Bucket.addObject">add_object</a></code> | Add a file to the bucket that is uploaded when the app is deployed. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Bucket.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `add_object` <a name="add_object" id="@winglang/sdk.cloud.Bucket.addObject"></a>

```wing
add_object(key: str, body: str): void
```

Add a file to the bucket that is uploaded when the app is deployed.

TODO: In the future this will support uploading any `Blob` type or
referencing a file from the local filesystem.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.cloud.Bucket.addObject.parameter.key"></a>

- *Type:* str

---

###### `body`<sup>Required</sup> <a name="body" id="@winglang/sdk.cloud.Bucket.addObject.parameter.body"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Bucket.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Bucket.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Bucket.isConstruct"></a>

```wing
bring cloud;

cloud.Bucket.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Bucket.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Bucket.addConnection"></a>

```wing
bring cloud;

cloud.Bucket.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Bucket.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Bucket.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Bucket.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Bucket.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Bucket.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Bucket.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Bucket.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---


### Counter <a name="Counter" id="@winglang/sdk.cloud.Counter"></a>

**Inflight client:** [@winglang/sdk.cloud.ICounterClient](#@winglang/sdk.cloud.ICounterClient)

Represents a distributed atomic counter.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Counter.Initializer"></a>

```wing
bring cloud;

new cloud.Counter(props?: CounterProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Counter.Initializer.parameter.props">props</a></code> | <code>cloud.CounterProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Counter.Initializer.parameter.props"></a>

- *Type:* cloud.CounterProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Counter.toString">to_string</a></code> | Returns a string representation of this construct. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Counter.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Counter.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Counter.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Counter.isConstruct"></a>

```wing
bring cloud;

cloud.Counter.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Counter.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Counter.addConnection"></a>

```wing
bring cloud;

cloud.Counter.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Counter.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Counter.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Counter.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Counter.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |
| <code><a href="#@winglang/sdk.cloud.Counter.property.initial">initial</a></code> | <code>num</code> | The initial value of the counter. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Counter.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Counter.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Counter.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---

##### `initial`<sup>Required</sup> <a name="initial" id="@winglang/sdk.cloud.Counter.property.initial"></a>

```wing
initial: num;
```

- *Type:* num

The initial value of the counter.

---


### Function <a name="Function" id="@winglang/sdk.cloud.Function"></a>

**Inflight client:** [@winglang/sdk.cloud.IFunctionClient](#@winglang/sdk.cloud.IFunctionClient)

Represents a function.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Function.Initializer"></a>

```wing
bring cloud;

new cloud.Function(inflight: ~Inflight, props?: FunctionProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Function.Initializer.parameter.inflight">inflight</a></code> | <code>core.Inflight</code> | *No description.* |
| <code><a href="#@winglang/sdk.cloud.Function.Initializer.parameter.props">props</a></code> | <code>cloud.FunctionProps</code> | *No description.* |

---

##### `inflight`<sup>Required</sup> <a name="inflight" id="@winglang/sdk.cloud.Function.Initializer.parameter.inflight"></a>

- *Type:* core.Inflight

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Function.Initializer.parameter.props"></a>

- *Type:* cloud.FunctionProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Function.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Function.addEnvironment">add_environment</a></code> | Add an environment variable to the function. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Function.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `add_environment` <a name="add_environment" id="@winglang/sdk.cloud.Function.addEnvironment"></a>

```wing
add_environment(_key: str, _value: str): void
```

Add an environment variable to the function.

###### `_key`<sup>Required</sup> <a name="_key" id="@winglang/sdk.cloud.Function.addEnvironment.parameter._key"></a>

- *Type:* str

---

###### `_value`<sup>Required</sup> <a name="_value" id="@winglang/sdk.cloud.Function.addEnvironment.parameter._value"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Function.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Function.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Function.isConstruct"></a>

```wing
bring cloud;

cloud.Function.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Function.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Function.addConnection"></a>

```wing
bring cloud;

cloud.Function.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Function.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Function.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Function.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Function.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |
| <code><a href="#@winglang/sdk.cloud.Function.property.env">env</a></code> | <code>MutMap&lt;str&gt;</code> | Returns the set of environment variables for this function. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Function.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Function.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Function.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---

##### `env`<sup>Required</sup> <a name="env" id="@winglang/sdk.cloud.Function.property.env"></a>

```wing
env: MutMap<str>;
```

- *Type:* MutMap&lt;str&gt;

Returns the set of environment variables for this function.

---


### Logger <a name="Logger" id="@winglang/sdk.cloud.Logger"></a>

**Inflight client:** [@winglang/sdk.cloud.ILoggerClient](#@winglang/sdk.cloud.ILoggerClient)

A cloud logging facility.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Logger.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Logger.print">print</a></code> | Logs a message (preflight). |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Logger.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `print` <a name="print" id="@winglang/sdk.cloud.Logger.print"></a>

```wing
print(message: str): void
```

Logs a message (preflight).

###### `message`<sup>Required</sup> <a name="message" id="@winglang/sdk.cloud.Logger.print.parameter.message"></a>

- *Type:* str

The message to log.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Logger.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Logger.addConnection">add_connection</a></code> | Adds a connection between two resources. |
| <code><a href="#@winglang/sdk.cloud.Logger.of">of</a></code> | Returns the logger registered to the given scope, throwing an error if there is none. |
| <code><a href="#@winglang/sdk.cloud.Logger.register">register</a></code> | Create a logger and register it to the given scope. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Logger.isConstruct"></a>

```wing
bring cloud;

cloud.Logger.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Logger.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Logger.addConnection"></a>

```wing
bring cloud;

cloud.Logger.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Logger.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

##### `of` <a name="of" id="@winglang/sdk.cloud.Logger.of"></a>

```wing
bring cloud;

cloud.Logger.of()
```

Returns the logger registered to the given scope, throwing an error if there is none.

##### `register` <a name="register" id="@winglang/sdk.cloud.Logger.register"></a>

```wing
bring cloud;

cloud.Logger.register()
```

Create a logger and register it to the given scope.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Logger.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Logger.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Logger.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Logger.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Logger.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Logger.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---


### Queue <a name="Queue" id="@winglang/sdk.cloud.Queue"></a>

**Inflight client:** [@winglang/sdk.cloud.IQueueClient](#@winglang/sdk.cloud.IQueueClient)

Represents a queue.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Queue.Initializer"></a>

```wing
bring cloud;

new cloud.Queue(props?: QueueProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Queue.Initializer.parameter.props">props</a></code> | <code>cloud.QueueProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Queue.Initializer.parameter.props"></a>

- *Type:* cloud.QueueProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Queue.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Queue.onMessage">on_message</a></code> | Create a function to consume messages from this queue. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Queue.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `on_message` <a name="on_message" id="@winglang/sdk.cloud.Queue.onMessage"></a>

```wing
on_message(inflight: ~Inflight, props?: QueueOnMessageProps): Function
```

Create a function to consume messages from this queue.

###### `inflight`<sup>Required</sup> <a name="inflight" id="@winglang/sdk.cloud.Queue.onMessage.parameter.inflight"></a>

- *Type:* core.Inflight

---

###### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Queue.onMessage.parameter.props"></a>

- *Type:* cloud.QueueOnMessageProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Queue.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Queue.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Queue.isConstruct"></a>

```wing
bring cloud;

cloud.Queue.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Queue.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Queue.addConnection"></a>

```wing
bring cloud;

cloud.Queue.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Queue.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Queue.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Queue.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Queue.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Queue.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Queue.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Queue.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---


### Schedule <a name="Schedule" id="@winglang/sdk.cloud.Schedule"></a>

**Inflight client:** [@winglang/sdk.cloud.IScheduleClient](#@winglang/sdk.cloud.IScheduleClient)

Represents a schedule.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Schedule.Initializer"></a>

```wing
bring cloud;

new cloud.Schedule(props?: ScheduleProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Schedule.Initializer.parameter.props">props</a></code> | <code>cloud.ScheduleProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Schedule.Initializer.parameter.props"></a>

- *Type:* cloud.ScheduleProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Schedule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Schedule.onTick">on_tick</a></code> | Create a function that runs when receiving the scheduled event. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Schedule.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `on_tick` <a name="on_tick" id="@winglang/sdk.cloud.Schedule.onTick"></a>

```wing
on_tick(inflight: ~Inflight, props?: ScheduleOnTickProps): Function
```

Create a function that runs when receiving the scheduled event.

###### `inflight`<sup>Required</sup> <a name="inflight" id="@winglang/sdk.cloud.Schedule.onTick.parameter.inflight"></a>

- *Type:* core.Inflight

---

###### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Schedule.onTick.parameter.props"></a>

- *Type:* cloud.ScheduleOnTickProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Schedule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Schedule.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Schedule.isConstruct"></a>

```wing
bring cloud;

cloud.Schedule.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Schedule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Schedule.addConnection"></a>

```wing
bring cloud;

cloud.Schedule.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Schedule.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Schedule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Schedule.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Schedule.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Schedule.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Schedule.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Schedule.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---


### Topic <a name="Topic" id="@winglang/sdk.cloud.Topic"></a>

**Inflight client:** [@winglang/sdk.cloud.ITopicClient](#@winglang/sdk.cloud.ITopicClient)

Represents a topic.

#### Initializers <a name="Initializers" id="@winglang/sdk.cloud.Topic.Initializer"></a>

```wing
bring cloud;

new cloud.Topic(props?: TopicProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Topic.Initializer.parameter.props">props</a></code> | <code>cloud.TopicProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Topic.Initializer.parameter.props"></a>

- *Type:* cloud.TopicProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Topic.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@winglang/sdk.cloud.Topic.onMessage">on_message</a></code> | Run an inflight whenever an message is published to the topic. |

---

##### `to_string` <a name="to_string" id="@winglang/sdk.cloud.Topic.toString"></a>

```wing
to_string(): str
```

Returns a string representation of this construct.

##### `on_message` <a name="on_message" id="@winglang/sdk.cloud.Topic.onMessage"></a>

```wing
on_message(inflight: ~Inflight, props?: TopicOnMessageProps): Function
```

Run an inflight whenever an message is published to the topic.

###### `inflight`<sup>Required</sup> <a name="inflight" id="@winglang/sdk.cloud.Topic.onMessage.parameter.inflight"></a>

- *Type:* core.Inflight

---

###### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.cloud.Topic.onMessage.parameter.props"></a>

- *Type:* cloud.TopicOnMessageProps

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.Topic.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@winglang/sdk.cloud.Topic.addConnection">add_connection</a></code> | Adds a connection between two resources. |

---

##### `is_construct` <a name="is_construct" id="@winglang/sdk.cloud.Topic.isConstruct"></a>

```wing
bring cloud;

cloud.Topic.is_construct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@winglang/sdk.cloud.Topic.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `add_connection` <a name="add_connection" id="@winglang/sdk.cloud.Topic.addConnection"></a>

```wing
bring cloud;

cloud.Topic.add_connection(props: AddConnectionProps)
```

Adds a connection between two resources.

A connection is a piece of
metadata describing how one resource is related to another resource. This
metadata is recorded in the tree.json file.

###### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.cloud.Topic.addConnection.parameter.props"></a>

- *Type:* core.AddConnectionProps

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.Topic.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.Topic.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |
| <code><a href="#@winglang/sdk.cloud.Topic.property.stateful">stateful</a></code> | <code>bool</code> | Whether a resource is stateful, i.e. it stores information that is not defined by your application. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.Topic.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.Topic.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@winglang/sdk.cloud.Topic.property.stateful"></a>

```wing
stateful: bool;
```

- *Type:* bool

Whether a resource is stateful, i.e. it stores information that is not defined by your application.

A non-stateful resource does not remember information about past
transactions or events, and can typically be replaced by a cloud provider
with a fresh copy without any consequences.

---


## Structs <a name="Structs" id="Structs"></a>

### AddConnectionProps <a name="AddConnectionProps" id="@winglang/sdk.core.AddConnectionProps"></a>

Props for `Resource.addConnection`.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.AddConnectionProps.Initializer"></a>

```wing
bring core;

let add_connection_props = core.AddConnectionProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.AddConnectionProps.property.from">from</a></code> | <code>core.IResource</code> | The resource creating the connection to `to`. |
| <code><a href="#@winglang/sdk.core.AddConnectionProps.property.relationship">relationship</a></code> | <code>str</code> | The type of relationship between the resources. |
| <code><a href="#@winglang/sdk.core.AddConnectionProps.property.to">to</a></code> | <code>core.IResource</code> | The resource `from` is connecting to. |
| <code><a href="#@winglang/sdk.core.AddConnectionProps.property.implicit">implicit</a></code> | <code>bool</code> | Whether the relationship is implicit, i.e. it is not explicitly defined by the user. |

---

##### `from`<sup>Required</sup> <a name="from" id="@winglang/sdk.core.AddConnectionProps.property.from"></a>

```wing
from: IResource;
```

- *Type:* core.IResource

The resource creating the connection to `to`.

---

##### `relationship`<sup>Required</sup> <a name="relationship" id="@winglang/sdk.core.AddConnectionProps.property.relationship"></a>

```wing
relationship: str;
```

- *Type:* str

The type of relationship between the resources.

---

##### `to`<sup>Required</sup> <a name="to" id="@winglang/sdk.core.AddConnectionProps.property.to"></a>

```wing
to: IResource;
```

- *Type:* core.IResource

The resource `from` is connecting to.

---

##### `implicit`<sup>Optional</sup> <a name="implicit" id="@winglang/sdk.core.AddConnectionProps.property.implicit"></a>

```wing
implicit: bool;
```

- *Type:* bool
- *Default:* false

Whether the relationship is implicit, i.e. it is not explicitly defined by the user.

---

### AppProps <a name="AppProps" id="@winglang/sdk.core.AppProps"></a>

Props for all `App` classes.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.AppProps.Initializer"></a>

```wing
bring core;

let app_props = core.AppProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.AppProps.property.customFactory">custom_factory</a></code> | <code>polycons.IPolyconFactory</code> | A custom factory to resolve polycons. |
| <code><a href="#@winglang/sdk.core.AppProps.property.name">name</a></code> | <code>str</code> | The name of the app. |
| <code><a href="#@winglang/sdk.core.AppProps.property.outdir">outdir</a></code> | <code>str</code> | Directory where artifacts are synthesized to. |
| <code><a href="#@winglang/sdk.core.AppProps.property.plugins">plugins</a></code> | <code>MutArray&lt;str&gt;</code> | Absolute paths to plugin javascript files. |
| <code><a href="#@winglang/sdk.core.AppProps.property.stateFile">state_file</a></code> | <code>str</code> | The path to a state file which will track all synthesized files. |

---

##### `custom_factory`<sup>Optional</sup> <a name="custom_factory" id="@winglang/sdk.core.AppProps.property.customFactory"></a>

```wing
custom_factory: IPolyconFactory;
```

- *Type:* polycons.IPolyconFactory
- *Default:* use the default polycon factory included in the Wing SDK

A custom factory to resolve polycons.

---

##### `name`<sup>Optional</sup> <a name="name" id="@winglang/sdk.core.AppProps.property.name"></a>

```wing
name: str;
```

- *Type:* str
- *Default:* "app"

The name of the app.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@winglang/sdk.core.AppProps.property.outdir"></a>

```wing
outdir: str;
```

- *Type:* str
- *Default:* current working directory

Directory where artifacts are synthesized to.

---

##### `plugins`<sup>Optional</sup> <a name="plugins" id="@winglang/sdk.core.AppProps.property.plugins"></a>

```wing
plugins: MutArray<str>;
```

- *Type:* MutArray&lt;str&gt;
- *Default:* [] no plugins

Absolute paths to plugin javascript files.

---

##### `state_file`<sup>Optional</sup> <a name="state_file" id="@winglang/sdk.core.AppProps.property.stateFile"></a>

```wing
state_file: str;
```

- *Type:* str
- *Default:* no state file

The path to a state file which will track all synthesized files.

If a
statefile is not specified, we won't be able to remove extrenous files.

---

### BucketDeleteOptions <a name="BucketDeleteOptions" id="@winglang/sdk.cloud.BucketDeleteOptions"></a>

Interface for delete method inside `Bucket`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.BucketDeleteOptions.Initializer"></a>

```wing
bring cloud;

let bucket_delete_options = cloud.BucketDeleteOptions{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.BucketDeleteOptions.property.mustExist">must_exist</a></code> | <code>bool</code> | Check failures on the method and retrieve errors if any. |

---

##### `must_exist`<sup>Optional</sup> <a name="must_exist" id="@winglang/sdk.cloud.BucketDeleteOptions.property.mustExist"></a>

```wing
must_exist: bool;
```

- *Type:* bool
- *Default:* false

Check failures on the method and retrieve errors if any.

---

### BucketProps <a name="BucketProps" id="@winglang/sdk.cloud.BucketProps"></a>

Properties for `Bucket`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.BucketProps.Initializer"></a>

```wing
bring cloud;

let bucket_props = cloud.BucketProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.BucketProps.property.public">public</a></code> | <code>bool</code> | Whether the bucket's objects should be publicly accessible. |

---

##### `public`<sup>Optional</sup> <a name="public" id="@winglang/sdk.cloud.BucketProps.property.public"></a>

```wing
public: bool;
```

- *Type:* bool
- *Default:* false

Whether the bucket's objects should be publicly accessible.

---

### Connection <a name="Connection" id="@winglang/sdk.core.Connection"></a>

A connection between two resources.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.Connection.Initializer"></a>

```wing
bring core;

let connection = core.Connection{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.Connection.property.direction">direction</a></code> | <code>core.Direction</code> | The direction of the connection. |
| <code><a href="#@winglang/sdk.core.Connection.property.implicit">implicit</a></code> | <code>bool</code> | Whether the relationship is implicit, i.e. it is not explicitly defined by the user. |
| <code><a href="#@winglang/sdk.core.Connection.property.relationship">relationship</a></code> | <code>str</code> | The type of relationship with the resource. |
| <code><a href="#@winglang/sdk.core.Connection.property.resource">resource</a></code> | <code>core.IResource</code> | The resource this connection is to. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@winglang/sdk.core.Connection.property.direction"></a>

```wing
direction: Direction;
```

- *Type:* core.Direction

The direction of the connection.

---

##### `implicit`<sup>Required</sup> <a name="implicit" id="@winglang/sdk.core.Connection.property.implicit"></a>

```wing
implicit: bool;
```

- *Type:* bool

Whether the relationship is implicit, i.e. it is not explicitly defined by the user.

---

##### `relationship`<sup>Required</sup> <a name="relationship" id="@winglang/sdk.core.Connection.property.relationship"></a>

```wing
relationship: str;
```

- *Type:* str

The type of relationship with the resource.

---

##### `resource`<sup>Required</sup> <a name="resource" id="@winglang/sdk.core.Connection.property.resource"></a>

```wing
resource: IResource;
```

- *Type:* core.IResource

The resource this connection is to.

---

### ConstructInfo <a name="ConstructInfo" id="@winglang/sdk.core.ConstructInfo"></a>

Source information on a construct (class fqn and version).

#### Initializer <a name="Initializer" id="@winglang/sdk.core.ConstructInfo.Initializer"></a>

```wing
bring core;

let construct_info = core.ConstructInfo{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.ConstructInfo.property.fqn">fqn</a></code> | <code>str</code> | Fully qualified class name. |
| <code><a href="#@winglang/sdk.core.ConstructInfo.property.version">version</a></code> | <code>str</code> | Version of the module. |

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@winglang/sdk.core.ConstructInfo.property.fqn"></a>

```wing
fqn: str;
```

- *Type:* str

Fully qualified class name.

---

##### `version`<sup>Required</sup> <a name="version" id="@winglang/sdk.core.ConstructInfo.property.version"></a>

```wing
version: str;
```

- *Type:* str

Version of the module.

---

### ConstructTree <a name="ConstructTree" id="@winglang/sdk.core.ConstructTree"></a>

The construct tree.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.ConstructTree.Initializer"></a>

```wing
bring core;

let construct_tree = core.ConstructTree{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.ConstructTree.property.tree">tree</a></code> | <code>core.ConstructTreeNode</code> | The root node. |
| <code><a href="#@winglang/sdk.core.ConstructTree.property.version">version</a></code> | <code>str</code> | The construct tree version. |

---

##### `tree`<sup>Required</sup> <a name="tree" id="@winglang/sdk.core.ConstructTree.property.tree"></a>

```wing
tree: ConstructTreeNode;
```

- *Type:* core.ConstructTreeNode

The root node.

---

##### `version`<sup>Required</sup> <a name="version" id="@winglang/sdk.core.ConstructTree.property.version"></a>

```wing
version: str;
```

- *Type:* str

The construct tree version.

---

### ConstructTreeNode <a name="ConstructTreeNode" id="@winglang/sdk.core.ConstructTreeNode"></a>

A node in the construct tree.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.ConstructTreeNode.Initializer"></a>

```wing
bring core;

let construct_tree_node = core.ConstructTreeNode{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.id">id</a></code> | <code>str</code> | The ID of the node. |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.path">path</a></code> | <code>str</code> | The path of the node. |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.attributes">attributes</a></code> | <code>MutMap&lt;any&gt;</code> | The node attributes. |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.children">children</a></code> | <code>MutMap&lt;core.ConstructTreeNode&gt;</code> | The child nodes. |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.constructInfo">construct_info</a></code> | <code>core.ConstructInfo</code> | Information on the construct class that led to this node, if available. |
| <code><a href="#@winglang/sdk.core.ConstructTreeNode.property.display">display</a></code> | <code>core.DisplayInfo</code> | Information on how to display this node in the UI. |

---

##### `id`<sup>Required</sup> <a name="id" id="@winglang/sdk.core.ConstructTreeNode.property.id"></a>

```wing
id: str;
```

- *Type:* str

The ID of the node.

Is part of the `path`.

---

##### `path`<sup>Required</sup> <a name="path" id="@winglang/sdk.core.ConstructTreeNode.property.path"></a>

```wing
path: str;
```

- *Type:* str

The path of the node.

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@winglang/sdk.core.ConstructTreeNode.property.attributes"></a>

```wing
attributes: MutMap<any>;
```

- *Type:* MutMap&lt;any&gt;

The node attributes.

---

##### `children`<sup>Optional</sup> <a name="children" id="@winglang/sdk.core.ConstructTreeNode.property.children"></a>

```wing
children: MutMap<ConstructTreeNode>;
```

- *Type:* MutMap&lt;core.ConstructTreeNode&gt;

The child nodes.

---

##### `construct_info`<sup>Optional</sup> <a name="construct_info" id="@winglang/sdk.core.ConstructTreeNode.property.constructInfo"></a>

```wing
construct_info: ConstructInfo;
```

- *Type:* core.ConstructInfo

Information on the construct class that led to this node, if available.

---

##### `display`<sup>Optional</sup> <a name="display" id="@winglang/sdk.core.ConstructTreeNode.property.display"></a>

```wing
display: DisplayInfo;
```

- *Type:* core.DisplayInfo

Information on how to display this node in the UI.

---

### CounterProps <a name="CounterProps" id="@winglang/sdk.cloud.CounterProps"></a>

Properties for `Counter`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.CounterProps.Initializer"></a>

```wing
bring cloud;

let counter_props = cloud.CounterProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.CounterProps.property.initial">initial</a></code> | <code>num</code> | The initial value of the counter. |

---

##### `initial`<sup>Optional</sup> <a name="initial" id="@winglang/sdk.cloud.CounterProps.property.initial"></a>

```wing
initial: num;
```

- *Type:* num
- *Default:* 0

The initial value of the counter.

---

### DisplayInfo <a name="DisplayInfo" id="@winglang/sdk.core.DisplayInfo"></a>

Information on how to display a construct in the UI.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.DisplayInfo.Initializer"></a>

```wing
bring core;

let display_info = core.DisplayInfo{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DisplayInfo.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@winglang/sdk.core.DisplayInfo.property.hidden">hidden</a></code> | <code>bool</code> | Whether the resource should be hidden from the UI. |
| <code><a href="#@winglang/sdk.core.DisplayInfo.property.title">title</a></code> | <code>str</code> | Title of the resource. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@winglang/sdk.core.DisplayInfo.property.description"></a>

```wing
description: str;
```

- *Type:* str
- *Default:* No description

Description of the resource.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@winglang/sdk.core.DisplayInfo.property.hidden"></a>

```wing
hidden: bool;
```

- *Type:* bool
- *Default:* false (visible)

Whether the resource should be hidden from the UI.

---

##### `title`<sup>Optional</sup> <a name="title" id="@winglang/sdk.core.DisplayInfo.property.title"></a>

```wing
title: str;
```

- *Type:* str
- *Default:* The type and/or identifier of the resource

Title of the resource.

---

### DisplayProps <a name="DisplayProps" id="@winglang/sdk.core.DisplayProps"></a>

Properties for the Display class.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.DisplayProps.Initializer"></a>

```wing
bring core;

let display_props = core.DisplayProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DisplayProps.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@winglang/sdk.core.DisplayProps.property.hidden">hidden</a></code> | <code>bool</code> | Whether the resource should be hidden from the UI. |
| <code><a href="#@winglang/sdk.core.DisplayProps.property.title">title</a></code> | <code>str</code> | Title of the resource. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@winglang/sdk.core.DisplayProps.property.description"></a>

```wing
description: str;
```

- *Type:* str
- *Default:* No description.

Description of the resource.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@winglang/sdk.core.DisplayProps.property.hidden"></a>

```wing
hidden: bool;
```

- *Type:* bool
- *Default:* Undefined

Whether the resource should be hidden from the UI.

---

##### `title`<sup>Optional</sup> <a name="title" id="@winglang/sdk.core.DisplayProps.property.title"></a>

```wing
title: str;
```

- *Type:* str
- *Default:* No title.

Title of the resource.

---

### FilesProps <a name="FilesProps" id="@winglang/sdk.core.FilesProps"></a>

Props for `Files`.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.FilesProps.Initializer"></a>

```wing
bring core;

let files_props = core.FilesProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.FilesProps.property.app">app</a></code> | <code>core.IApp</code> | The app with files to synthesize. |
| <code><a href="#@winglang/sdk.core.FilesProps.property.stateFile">state_file</a></code> | <code>str</code> | The path to a state file which will track all synthesized files. |

---

##### `app`<sup>Required</sup> <a name="app" id="@winglang/sdk.core.FilesProps.property.app"></a>

```wing
app: IApp;
```

- *Type:* core.IApp

The app with files to synthesize.

---

##### `state_file`<sup>Optional</sup> <a name="state_file" id="@winglang/sdk.core.FilesProps.property.stateFile"></a>

```wing
state_file: str;
```

- *Type:* str
- *Default:* no state file

The path to a state file which will track all synthesized files.

If a
statefile is not specified, we won't be able to remove extrenous files.

---

### FunctionProps <a name="FunctionProps" id="@winglang/sdk.cloud.FunctionProps"></a>

Properties for `Function`.

This is the type users see when constructing a cloud.Function instance.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.FunctionProps.Initializer"></a>

```wing
bring cloud;

let function_props = cloud.FunctionProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.FunctionProps.property.env">env</a></code> | <code>MutMap&lt;str&gt;</code> | Environment variables to pass to the function. |
| <code><a href="#@winglang/sdk.cloud.FunctionProps.property.memory">memory</a></code> | <code>num</code> | The amount of memory to allocate to the function, in MB. |
| <code><a href="#@winglang/sdk.cloud.FunctionProps.property.timeout">timeout</a></code> | <code>std.Duration</code> | The maximum amount of time the function can run. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@winglang/sdk.cloud.FunctionProps.property.env"></a>

```wing
env: MutMap<str>;
```

- *Type:* MutMap&lt;str&gt;
- *Default:* No environment variables.

Environment variables to pass to the function.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@winglang/sdk.cloud.FunctionProps.property.memory"></a>

```wing
memory: num;
```

- *Type:* num
- *Default:* 128

The amount of memory to allocate to the function, in MB.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@winglang/sdk.cloud.FunctionProps.property.timeout"></a>

```wing
timeout: Duration;
```

- *Type:* std.Duration
- *Default:* 1m

The maximum amount of time the function can run.

---

### InflightBinding <a name="InflightBinding" id="@winglang/sdk.core.InflightBinding"></a>

An inflight binding.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.InflightBinding.Initializer"></a>

```wing
bring core;

let inflight_binding = core.InflightBinding{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.InflightBinding.property.obj">obj</a></code> | <code>any</code> | The resource or capturable value. |
| <code><a href="#@winglang/sdk.core.InflightBinding.property.ops">ops</a></code> | <code>MutArray&lt;str&gt;</code> | The list of operations used on the resource. |

---

##### `obj`<sup>Required</sup> <a name="obj" id="@winglang/sdk.core.InflightBinding.property.obj"></a>

```wing
obj: any;
```

- *Type:* any

The resource or capturable value.

---

##### `ops`<sup>Optional</sup> <a name="ops" id="@winglang/sdk.core.InflightBinding.property.ops"></a>

```wing
ops: MutArray<str>;
```

- *Type:* MutArray&lt;str&gt;

The list of operations used on the resource.

---

### InflightProps <a name="InflightProps" id="@winglang/sdk.core.InflightProps"></a>

Props for `Inflight`.

#### Initializer <a name="Initializer" id="@winglang/sdk.core.InflightProps.Initializer"></a>

```wing
bring core;

let inflight_props = core.InflightProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.InflightProps.property.code">code</a></code> | <code>core.Code</code> | Reference to the inflight code. Only JavaScript code is currently supported. |
| <code><a href="#@winglang/sdk.core.InflightProps.property.bindings">bindings</a></code> | <code>MutMap&lt;core.InflightBinding&gt;</code> | Data and resource binding information. |

---

##### `code`<sup>Required</sup> <a name="code" id="@winglang/sdk.core.InflightProps.property.code"></a>

```wing
code: Code;
```

- *Type:* core.Code

Reference to the inflight code. Only JavaScript code is currently supported.

The JavaScript code needs be in the form `async handle(event) { ... }`, and
all references to resources must be made through `this.<resource>`.

---

##### `bindings`<sup>Optional</sup> <a name="bindings" id="@winglang/sdk.core.InflightProps.property.bindings"></a>

```wing
bindings: MutMap<InflightBinding>;
```

- *Type:* MutMap&lt;core.InflightBinding&gt;
- *Default:* no bindings

Data and resource binding information.

---

### JsonFileProps <a name="JsonFileProps" id="@winglang/sdk.fs.JsonFileProps"></a>

Props for `JsonFile`.

#### Initializer <a name="Initializer" id="@winglang/sdk.fs.JsonFileProps.Initializer"></a>

```wing
bring fs;

let json_file_props = fs.JsonFileProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.fs.JsonFileProps.property.obj">obj</a></code> | <code>any</code> | The object that will be serialized into the file during synthesis. |

---

##### `obj`<sup>Required</sup> <a name="obj" id="@winglang/sdk.fs.JsonFileProps.property.obj"></a>

```wing
obj: any;
```

- *Type:* any

The object that will be serialized into the file during synthesis.

---

### OperationAnnotation <a name="OperationAnnotation" id="@winglang/sdk.core.OperationAnnotation"></a>

Annotations about what resources an inflight operation may access.

The following example says that the operation may call "put" on a resource
at "this.inner", or it may call "get" on a resource passed as an argument named
"other".

*Example*

```wing
{ "this.inner": { ops: ["put"] }, "other": { ops: ["get"] } }
```


#### Initializer <a name="Initializer" id="@winglang/sdk.core.OperationAnnotation.Initializer"></a>

```wing
bring core;

let operation_annotation = core.OperationAnnotation{ ... }
```


### QueueOnMessageProps <a name="QueueOnMessageProps" id="@winglang/sdk.cloud.QueueOnMessageProps"></a>

Options for Queue.onMessage.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.QueueOnMessageProps.Initializer"></a>

```wing
bring cloud;

let queue_on_message_props = cloud.QueueOnMessageProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.QueueOnMessageProps.property.env">env</a></code> | <code>MutMap&lt;str&gt;</code> | Environment variables to pass to the function. |
| <code><a href="#@winglang/sdk.cloud.QueueOnMessageProps.property.memory">memory</a></code> | <code>num</code> | The amount of memory to allocate to the function, in MB. |
| <code><a href="#@winglang/sdk.cloud.QueueOnMessageProps.property.timeout">timeout</a></code> | <code>std.Duration</code> | The maximum amount of time the function can run. |
| <code><a href="#@winglang/sdk.cloud.QueueOnMessageProps.property.batchSize">batch_size</a></code> | <code>num</code> | The maximum number of messages to send to subscribers at once. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@winglang/sdk.cloud.QueueOnMessageProps.property.env"></a>

```wing
env: MutMap<str>;
```

- *Type:* MutMap&lt;str&gt;
- *Default:* No environment variables.

Environment variables to pass to the function.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@winglang/sdk.cloud.QueueOnMessageProps.property.memory"></a>

```wing
memory: num;
```

- *Type:* num
- *Default:* 128

The amount of memory to allocate to the function, in MB.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@winglang/sdk.cloud.QueueOnMessageProps.property.timeout"></a>

```wing
timeout: Duration;
```

- *Type:* std.Duration
- *Default:* 1m

The maximum amount of time the function can run.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="@winglang/sdk.cloud.QueueOnMessageProps.property.batchSize"></a>

```wing
batch_size: num;
```

- *Type:* num
- *Default:* 1

The maximum number of messages to send to subscribers at once.

---

### QueueProps <a name="QueueProps" id="@winglang/sdk.cloud.QueueProps"></a>

Properties for `Queue`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.QueueProps.Initializer"></a>

```wing
bring cloud;

let queue_props = cloud.QueueProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.QueueProps.property.initialMessages">initial_messages</a></code> | <code>MutArray&lt;str&gt;</code> | Initialize the queue with a set of messages. |
| <code><a href="#@winglang/sdk.cloud.QueueProps.property.timeout">timeout</a></code> | <code>std.Duration</code> | How long a queue's consumers have to process a message. |

---

##### `initial_messages`<sup>Optional</sup> <a name="initial_messages" id="@winglang/sdk.cloud.QueueProps.property.initialMessages"></a>

```wing
initial_messages: MutArray<str>;
```

- *Type:* MutArray&lt;str&gt;
- *Default:* []

Initialize the queue with a set of messages.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@winglang/sdk.cloud.QueueProps.property.timeout"></a>

```wing
timeout: Duration;
```

- *Type:* std.Duration
- *Default:* Duration.fromSeconds(10)

How long a queue's consumers have to process a message.

---

### ScheduleOnTickProps <a name="ScheduleOnTickProps" id="@winglang/sdk.cloud.ScheduleOnTickProps"></a>

Options for Schedule.onTick.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.ScheduleOnTickProps.Initializer"></a>

```wing
bring cloud;

let schedule_on_tick_props = cloud.ScheduleOnTickProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.ScheduleOnTickProps.property.env">env</a></code> | <code>MutMap&lt;str&gt;</code> | Environment variables to pass to the function. |
| <code><a href="#@winglang/sdk.cloud.ScheduleOnTickProps.property.memory">memory</a></code> | <code>num</code> | The amount of memory to allocate to the function, in MB. |
| <code><a href="#@winglang/sdk.cloud.ScheduleOnTickProps.property.timeout">timeout</a></code> | <code>std.Duration</code> | The maximum amount of time the function can run. |

---

##### `env`<sup>Optional</sup> <a name="env" id="@winglang/sdk.cloud.ScheduleOnTickProps.property.env"></a>

```wing
env: MutMap<str>;
```

- *Type:* MutMap&lt;str&gt;
- *Default:* No environment variables.

Environment variables to pass to the function.

---

##### `memory`<sup>Optional</sup> <a name="memory" id="@winglang/sdk.cloud.ScheduleOnTickProps.property.memory"></a>

```wing
memory: num;
```

- *Type:* num
- *Default:* 128

The amount of memory to allocate to the function, in MB.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@winglang/sdk.cloud.ScheduleOnTickProps.property.timeout"></a>

```wing
timeout: Duration;
```

- *Type:* std.Duration
- *Default:* 1m

The maximum amount of time the function can run.

---

### ScheduleProps <a name="ScheduleProps" id="@winglang/sdk.cloud.ScheduleProps"></a>

Properties for `Schedule`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.ScheduleProps.Initializer"></a>

```wing
bring cloud;

let schedule_props = cloud.ScheduleProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.ScheduleProps.property.cron">cron</a></code> | <code>str</code> | Trigger events according to a cron schedule using the UNIX cron format. |
| <code><a href="#@winglang/sdk.cloud.ScheduleProps.property.rate">rate</a></code> | <code>std.Duration</code> | Trigger events at a periodic rate. |

---

##### `cron`<sup>Optional</sup> <a name="cron" id="@winglang/sdk.cloud.ScheduleProps.property.cron"></a>

```wing
cron: str;
```

- *Type:* str
- *Default:* undefined

Trigger events according to a cron schedule using the UNIX cron format.

[minute] [hour] [day of month] [month] [day of week]

---

*Example*

```wing
"0/1 * ? * *"
```


##### `rate`<sup>Optional</sup> <a name="rate" id="@winglang/sdk.cloud.ScheduleProps.property.rate"></a>

```wing
rate: Duration;
```

- *Type:* std.Duration
- *Default:* undefined

Trigger events at a periodic rate.

---

*Example*

```wing
1m
```


### TextFileProps <a name="TextFileProps" id="@winglang/sdk.fs.TextFileProps"></a>

Props for `TextFile`.

#### Initializer <a name="Initializer" id="@winglang/sdk.fs.TextFileProps.Initializer"></a>

```wing
bring fs;

let text_file_props = fs.TextFileProps{ ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.fs.TextFileProps.property.lines">lines</a></code> | <code>MutArray&lt;str&gt;</code> | The lines of text that will be serialized into the file during synthesis. |

---

##### `lines`<sup>Optional</sup> <a name="lines" id="@winglang/sdk.fs.TextFileProps.property.lines"></a>

```wing
lines: MutArray<str>;
```

- *Type:* MutArray&lt;str&gt;
- *Default:* []

The lines of text that will be serialized into the file during synthesis.

They will be joined with newline characters.

---

### TopicOnMessageProps <a name="TopicOnMessageProps" id="@winglang/sdk.cloud.TopicOnMessageProps"></a>

Options for `Topic.onMessage`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.TopicOnMessageProps.Initializer"></a>

```wing
bring cloud;

let topic_on_message_props = cloud.TopicOnMessageProps{ ... }
```


### TopicProps <a name="TopicProps" id="@winglang/sdk.cloud.TopicProps"></a>

Properties for `Topic`.

#### Initializer <a name="Initializer" id="@winglang/sdk.cloud.TopicProps.Initializer"></a>

```wing
bring cloud;

let topic_props = cloud.TopicProps{ ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DependencyGraph <a name="DependencyGraph" id="@winglang/sdk.core.DependencyGraph"></a>

Represents the dependency graph for a given Node.

This graph includes the dependency relationships between all nodes in the
node (construct) sub-tree who's root is this Node.

Note that this means that lonely nodes (no dependencies and no dependants) are also included in this graph as
childless children of the root node of the graph.

The graph does not include cross-scope dependencies. That is, if a child on the current scope depends on a node
from a different scope, that relationship is not represented in this graph.

#### Initializers <a name="Initializers" id="@winglang/sdk.core.DependencyGraph.Initializer"></a>

```wing
bring core;

new core.DependencyGraph(node: Node)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyGraph.Initializer.parameter.node">node</a></code> | <code>constructs.Node</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.core.DependencyGraph.Initializer.parameter.node"></a>

- *Type:* constructs.Node

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyGraph.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `topology` <a name="topology" id="@winglang/sdk.core.DependencyGraph.topology"></a>

```wing
topology(): MutArray<IConstruct>
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyGraph.property.root">root</a></code> | <code>core.DependencyVertex</code> | Returns the root of the graph. |

---

##### `root`<sup>Required</sup> <a name="root" id="@winglang/sdk.core.DependencyGraph.property.root"></a>

```wing
root: DependencyVertex;
```

- *Type:* core.DependencyVertex

Returns the root of the graph.

Note that this vertex will always have `null` as its `.value` since it is an artifical root
that binds all the connected spaces of the graph.

---


### DependencyVertex <a name="DependencyVertex" id="@winglang/sdk.core.DependencyVertex"></a>

Represents a vertex in the graph.

The value of each vertex is an `IConstruct` that is accessible via the `.value` getter.

#### Initializers <a name="Initializers" id="@winglang/sdk.core.DependencyVertex.Initializer"></a>

```wing
bring core;

new core.DependencyVertex(value?: IConstruct)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyVertex.Initializer.parameter.value">value</a></code> | <code>constructs.IConstruct</code> | *No description.* |

---

##### `value`<sup>Optional</sup> <a name="value" id="@winglang/sdk.core.DependencyVertex.Initializer.parameter.value"></a>

- *Type:* constructs.IConstruct

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyVertex.addChild">add_child</a></code> | Adds a vertex as a dependency of the current node. |
| <code><a href="#@winglang/sdk.core.DependencyVertex.topology">topology</a></code> | Returns a topologically sorted array of the constructs in the sub-graph. |

---

##### `add_child` <a name="add_child" id="@winglang/sdk.core.DependencyVertex.addChild"></a>

```wing
add_child(dep: DependencyVertex): void
```

Adds a vertex as a dependency of the current node.

Also updates the parents of `dep`, so that it contains this node as a parent.

This operation will fail in case it creates a cycle in the graph.

###### `dep`<sup>Required</sup> <a name="dep" id="@winglang/sdk.core.DependencyVertex.addChild.parameter.dep"></a>

- *Type:* core.DependencyVertex

The dependency.

---

##### `topology` <a name="topology" id="@winglang/sdk.core.DependencyVertex.topology"></a>

```wing
topology(): MutArray<IConstruct>
```

Returns a topologically sorted array of the constructs in the sub-graph.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.DependencyVertex.property.inbound">inbound</a></code> | <code>MutArray&lt;core.DependencyVertex&gt;</code> | Returns the parents of the vertex (i.e dependants). |
| <code><a href="#@winglang/sdk.core.DependencyVertex.property.outbound">outbound</a></code> | <code>MutArray&lt;core.DependencyVertex&gt;</code> | Returns the children of the vertex (i.e dependencies). |
| <code><a href="#@winglang/sdk.core.DependencyVertex.property.value">value</a></code> | <code>constructs.IConstruct</code> | Returns the IConstruct this graph vertex represents. |

---

##### `inbound`<sup>Required</sup> <a name="inbound" id="@winglang/sdk.core.DependencyVertex.property.inbound"></a>

```wing
inbound: MutArray<DependencyVertex>;
```

- *Type:* MutArray&lt;core.DependencyVertex&gt;

Returns the parents of the vertex (i.e dependants).

---

##### `outbound`<sup>Required</sup> <a name="outbound" id="@winglang/sdk.core.DependencyVertex.property.outbound"></a>

```wing
outbound: MutArray<DependencyVertex>;
```

- *Type:* MutArray&lt;core.DependencyVertex&gt;

Returns the children of the vertex (i.e dependencies).

---

##### `value`<sup>Optional</sup> <a name="value" id="@winglang/sdk.core.DependencyVertex.property.value"></a>

```wing
value: IConstruct;
```

- *Type:* constructs.IConstruct

Returns the IConstruct this graph vertex represents.

`null` in case this is the root of the graph.

---


### Display <a name="Display" id="@winglang/sdk.core.Display"></a>

Information on how to display a resource in the UI.

#### Initializers <a name="Initializers" id="@winglang/sdk.core.Display.Initializer"></a>

```wing
bring core;

new core.Display(props?: DisplayProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.Display.Initializer.parameter.props">props</a></code> | <code>core.DisplayProps</code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="@winglang/sdk.core.Display.Initializer.parameter.props"></a>

- *Type:* core.DisplayProps

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.Display.property.description">description</a></code> | <code>str</code> | Description of the resource. |
| <code><a href="#@winglang/sdk.core.Display.property.hidden">hidden</a></code> | <code>bool</code> | Whether the resource should be hidden from the UI. |
| <code><a href="#@winglang/sdk.core.Display.property.title">title</a></code> | <code>str</code> | Title of the resource. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@winglang/sdk.core.Display.property.description"></a>

```wing
description: str;
```

- *Type:* str

Description of the resource.

---

##### `hidden`<sup>Optional</sup> <a name="hidden" id="@winglang/sdk.core.Display.property.hidden"></a>

```wing
hidden: bool;
```

- *Type:* bool

Whether the resource should be hidden from the UI.

---

##### `title`<sup>Optional</sup> <a name="title" id="@winglang/sdk.core.Display.property.title"></a>

```wing
title: str;
```

- *Type:* str

Title of the resource.

---


### Duration <a name="Duration" id="@winglang/sdk.std.Duration"></a>

Represents a length of time.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.Duration.fromHours">from_hours</a></code> | Create a Duration representing an amount of hours. |
| <code><a href="#@winglang/sdk.std.Duration.fromMinutes">from_minutes</a></code> | Create a Duration representing an amount of minutes. |
| <code><a href="#@winglang/sdk.std.Duration.fromSeconds">from_seconds</a></code> | Create a Duration representing an amount of seconds. |

---

##### `from_hours` <a name="from_hours" id="@winglang/sdk.std.Duration.fromHours"></a>

```wing
bring std;

std.Duration.from_hours(amount: num)
```

Create a Duration representing an amount of hours.

###### `amount`<sup>Required</sup> <a name="amount" id="@winglang/sdk.std.Duration.fromHours.parameter.amount"></a>

- *Type:* num

the amount of Hours the `Duration` will represent.

---

##### `from_minutes` <a name="from_minutes" id="@winglang/sdk.std.Duration.fromMinutes"></a>

```wing
bring std;

std.Duration.from_minutes(amount: num)
```

Create a Duration representing an amount of minutes.

###### `amount`<sup>Required</sup> <a name="amount" id="@winglang/sdk.std.Duration.fromMinutes.parameter.amount"></a>

- *Type:* num

the amount of Minutes the `Duration` will represent.

---

##### `from_seconds` <a name="from_seconds" id="@winglang/sdk.std.Duration.fromSeconds"></a>

```wing
bring std;

std.Duration.from_seconds(amount: num)
```

Create a Duration representing an amount of seconds.

###### `amount`<sup>Required</sup> <a name="amount" id="@winglang/sdk.std.Duration.fromSeconds.parameter.amount"></a>

- *Type:* num

the amount of Seconds the `Duration` will represent.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.Duration.property.hours">hours</a></code> | <code>num</code> | Return the total number of hours in this Duration. |
| <code><a href="#@winglang/sdk.std.Duration.property.minutes">minutes</a></code> | <code>num</code> | Return the total number of minutes in this Duration. |
| <code><a href="#@winglang/sdk.std.Duration.property.seconds">seconds</a></code> | <code>num</code> | Return the total number of seconds in this Duration. |

---

##### `hours`<sup>Required</sup> <a name="hours" id="@winglang/sdk.std.Duration.property.hours"></a>

```wing
hours: num;
```

- *Type:* num

Return the total number of hours in this Duration.

---

##### `minutes`<sup>Required</sup> <a name="minutes" id="@winglang/sdk.std.Duration.property.minutes"></a>

```wing
minutes: num;
```

- *Type:* num

Return the total number of minutes in this Duration.

---

##### `seconds`<sup>Required</sup> <a name="seconds" id="@winglang/sdk.std.Duration.property.seconds"></a>

```wing
seconds: num;
```

- *Type:* num

Return the total number of seconds in this Duration.

---


### Files <a name="Files" id="@winglang/sdk.core.Files"></a>

Handles the synthesis of files.

#### Initializers <a name="Initializers" id="@winglang/sdk.core.Files.Initializer"></a>

```wing
bring core;

new core.Files(props: FilesProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.Files.Initializer.parameter.props">props</a></code> | <code>core.FilesProps</code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="@winglang/sdk.core.Files.Initializer.parameter.props"></a>

- *Type:* core.FilesProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.Files.synth">synth</a></code> | Synthesize the app into the output directory. |

---

##### `synth` <a name="synth" id="@winglang/sdk.core.Files.synth"></a>

```wing
synth(outdir?: str): void
```

Synthesize the app into the output directory.

The artifact produced
depends on what synthesizer was used.

###### `outdir`<sup>Optional</sup> <a name="outdir" id="@winglang/sdk.core.Files.synth.parameter.outdir"></a>

- *Type:* str

The output directory, if not specified, the app's outdir will be used.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.Files.property.stateFile">state_file</a></code> | <code>str</code> | The path to a state file which will track all synthesized files. |

---

##### `state_file`<sup>Optional</sup> <a name="state_file" id="@winglang/sdk.core.Files.property.stateFile"></a>

```wing
state_file: str;
```

- *Type:* str

The path to a state file which will track all synthesized files.

---


### ImmutableArray <a name="ImmutableArray" id="@winglang/sdk.std.ImmutableArray"></a>

Immutable Array.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.ImmutableArray.Initializer"></a>

```wing
bring std;

new std.ImmutableArray()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.ImmutableArray.at">at</a></code> | Get the value at the given index. |
| <code><a href="#@winglang/sdk.std.ImmutableArray.copy">copy</a></code> | Create an immutable shallow copy of this array. |
| <code><a href="#@winglang/sdk.std.ImmutableArray.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this array. |

---

##### `at` <a name="at" id="@winglang/sdk.std.ImmutableArray.at"></a>

```wing
at(index: num): T1
```

Get the value at the given index.

###### `index`<sup>Required</sup> <a name="index" id="@winglang/sdk.std.ImmutableArray.at.parameter.index"></a>

- *Type:* num

index of the value to get.

---

##### `copy` <a name="copy" id="@winglang/sdk.std.ImmutableArray.copy"></a>

```wing
copy(): ImmutableArray
```

Create an immutable shallow copy of this array.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.ImmutableArray.copyMut"></a>

```wing
copy_mut(): MutableArray
```

Create a mutable shallow copy of this array.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.ImmutableArray.property.length">length</a></code> | <code>num</code> | The length of the array. |

---

##### `length`<sup>Required</sup> <a name="length" id="@winglang/sdk.std.ImmutableArray.property.length"></a>

```wing
length: num;
```

- *Type:* num

The length of the array.

---


### ImmutableMap <a name="ImmutableMap" id="@winglang/sdk.std.ImmutableMap"></a>

Immutable Map.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.ImmutableMap.Initializer"></a>

```wing
bring std;

new std.ImmutableMap()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.ImmutableMap.copy">copy</a></code> | Create an immutable shallow copy of this map. |
| <code><a href="#@winglang/sdk.std.ImmutableMap.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this map. |
| <code><a href="#@winglang/sdk.std.ImmutableMap.get">get</a></code> | Returns a specified element from the map. |
| <code><a href="#@winglang/sdk.std.ImmutableMap.has">has</a></code> | Returns a boolean indicating whether an element with the specified key exists or not. |
| <code><a href="#@winglang/sdk.std.ImmutableMap.size">size</a></code> | Returns the number of elements in the map. |

---

##### `copy` <a name="copy" id="@winglang/sdk.std.ImmutableMap.copy"></a>

```wing
copy(): ImmutableMap
```

Create an immutable shallow copy of this map.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.ImmutableMap.copyMut"></a>

```wing
copy_mut(): MutableMap
```

Create a mutable shallow copy of this map.

##### `get` <a name="get" id="@winglang/sdk.std.ImmutableMap.get"></a>

```wing
get(key: str): T1
```

Returns a specified element from the map.

If the value that is associated to the provided key is an object, then you will get a reference
to that object and any change made to that object will effectively modify it inside the map.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.ImmutableMap.get.parameter.key"></a>

- *Type:* str

The key of the element to return.

---

##### `has` <a name="has" id="@winglang/sdk.std.ImmutableMap.has"></a>

```wing
has(key: str): bool
```

Returns a boolean indicating whether an element with the specified key exists or not.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.ImmutableMap.has.parameter.key"></a>

- *Type:* str

The key of the element to test for presence.

---

##### `size` <a name="size" id="@winglang/sdk.std.ImmutableMap.size"></a>

```wing
size(): num
```

Returns the number of elements in the map.

TODO: For now this has to be a method rather than a getter as macros only work on methods https://github.com/winglang/wing/issues/1658




### ImmutableSet <a name="ImmutableSet" id="@winglang/sdk.std.ImmutableSet"></a>

Immutable Set.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.ImmutableSet.Initializer"></a>

```wing
bring std;

new std.ImmutableSet()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.ImmutableSet.copy">copy</a></code> | Create an immutable shallow copy of this set. |
| <code><a href="#@winglang/sdk.std.ImmutableSet.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this set. |
| <code><a href="#@winglang/sdk.std.ImmutableSet.has">has</a></code> | Returns a boolean indicating whether an element with the specified value exists in the set. |

---

##### `copy` <a name="copy" id="@winglang/sdk.std.ImmutableSet.copy"></a>

```wing
copy(): ImmutableSet
```

Create an immutable shallow copy of this set.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.ImmutableSet.copyMut"></a>

```wing
copy_mut(): MutableSet
```

Create a mutable shallow copy of this set.

##### `has` <a name="has" id="@winglang/sdk.std.ImmutableSet.has"></a>

```wing
has(value: T1): bool
```

Returns a boolean indicating whether an element with the specified value exists in the set.

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.ImmutableSet.has.parameter.value"></a>

- *Type:* std.T1

The value to test for presence in the Set object.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.ImmutableSet.property.size">size</a></code> | <code>num</code> | The length of the set. |

---

##### `size`<sup>Required</sup> <a name="size" id="@winglang/sdk.std.ImmutableSet.property.size"></a>

```wing
size: num;
```

- *Type:* num

The length of the set.

---


### InflightClient <a name="InflightClient" id="@winglang/sdk.core.InflightClient"></a>

Utility class with functions about inflight clients.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.InflightClient.for">for</a></code> | Creates a `Code` instance with code for creating an inflight client. |

---

##### `for` <a name="for" id="@winglang/sdk.core.InflightClient.for"></a>

```wing
bring core;

core.InflightClient.for(filename: str, client_class: str, args: MutArray<str>)
```

Creates a `Code` instance with code for creating an inflight client.

###### `filename`<sup>Required</sup> <a name="filename" id="@winglang/sdk.core.InflightClient.for.parameter.filename"></a>

- *Type:* str

---

###### `client_class`<sup>Required</sup> <a name="client_class" id="@winglang/sdk.core.InflightClient.for.parameter.clientClass"></a>

- *Type:* str

---

###### `args`<sup>Required</sup> <a name="args" id="@winglang/sdk.core.InflightClient.for.parameter.args"></a>

- *Type:* MutArray&lt;str&gt;

---



### MutableArray <a name="MutableArray" id="@winglang/sdk.std.MutableArray"></a>

Mutable Array.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.MutableArray.Initializer"></a>

```wing
bring std;

new std.MutableArray()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.MutableArray.at">at</a></code> | Get the value at the given index. |
| <code><a href="#@winglang/sdk.std.MutableArray.copy">copy</a></code> | Create an immutable shallow copy of this array. |
| <code><a href="#@winglang/sdk.std.MutableArray.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this array. |
| <code><a href="#@winglang/sdk.std.MutableArray.pop">pop</a></code> | Remove value from end of array. |
| <code><a href="#@winglang/sdk.std.MutableArray.push">push</a></code> | Add value to end of array. |

---

##### `at` <a name="at" id="@winglang/sdk.std.MutableArray.at"></a>

```wing
at(index: num): T1
```

Get the value at the given index.

###### `index`<sup>Required</sup> <a name="index" id="@winglang/sdk.std.MutableArray.at.parameter.index"></a>

- *Type:* num

index of the value to get.

---

##### `copy` <a name="copy" id="@winglang/sdk.std.MutableArray.copy"></a>

```wing
copy(): ImmutableArray
```

Create an immutable shallow copy of this array.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.MutableArray.copyMut"></a>

```wing
copy_mut(): MutableArray
```

Create a mutable shallow copy of this array.

##### `pop` <a name="pop" id="@winglang/sdk.std.MutableArray.pop"></a>

```wing
pop(): T1
```

Remove value from end of array.

##### `push` <a name="push" id="@winglang/sdk.std.MutableArray.push"></a>

```wing
push(value: T1): void
```

Add value to end of array.

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.MutableArray.push.parameter.value"></a>

- *Type:* std.T1

value to add.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.MutableArray.property.length">length</a></code> | <code>num</code> | The length of the array. |

---

##### `length`<sup>Required</sup> <a name="length" id="@winglang/sdk.std.MutableArray.property.length"></a>

```wing
length: num;
```

- *Type:* num

The length of the array.

---


### MutableMap <a name="MutableMap" id="@winglang/sdk.std.MutableMap"></a>

Mutable Map.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.MutableMap.Initializer"></a>

```wing
bring std;

new std.MutableMap()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.MutableMap.copy">copy</a></code> | Create an immutable shallow copy of this map. |
| <code><a href="#@winglang/sdk.std.MutableMap.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this map. |
| <code><a href="#@winglang/sdk.std.MutableMap.get">get</a></code> | Returns a specified element from the map. |
| <code><a href="#@winglang/sdk.std.MutableMap.has">has</a></code> | Returns a boolean indicating whether an element with the specified key exists or not. |
| <code><a href="#@winglang/sdk.std.MutableMap.size">size</a></code> | Returns the number of elements in the map. |
| <code><a href="#@winglang/sdk.std.MutableMap.clear">clear</a></code> | Removes all elements. |
| <code><a href="#@winglang/sdk.std.MutableMap.delete">delete</a></code> | Removes the specified element from a map. |
| <code><a href="#@winglang/sdk.std.MutableMap.set">set</a></code> | Adds or updates an entry in a Map object with a specified key and a value. |

---

##### `copy` <a name="copy" id="@winglang/sdk.std.MutableMap.copy"></a>

```wing
copy(): ImmutableMap
```

Create an immutable shallow copy of this map.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.MutableMap.copyMut"></a>

```wing
copy_mut(): MutableMap
```

Create a mutable shallow copy of this map.

##### `get` <a name="get" id="@winglang/sdk.std.MutableMap.get"></a>

```wing
get(key: str): T1
```

Returns a specified element from the map.

If the value that is associated to the provided key is an object, then you will get a reference
to that object and any change made to that object will effectively modify it inside the map.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.MutableMap.get.parameter.key"></a>

- *Type:* str

The key of the element to return.

---

##### `has` <a name="has" id="@winglang/sdk.std.MutableMap.has"></a>

```wing
has(key: str): bool
```

Returns a boolean indicating whether an element with the specified key exists or not.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.MutableMap.has.parameter.key"></a>

- *Type:* str

The key of the element to test for presence.

---

##### `size` <a name="size" id="@winglang/sdk.std.MutableMap.size"></a>

```wing
size(): num
```

Returns the number of elements in the map.

TODO: For now this has to be a method rather than a getter as macros only work on methods https://github.com/winglang/wing/issues/1658

##### `clear` <a name="clear" id="@winglang/sdk.std.MutableMap.clear"></a>

```wing
clear(): void
```

Removes all elements.

##### `delete` <a name="delete" id="@winglang/sdk.std.MutableMap.delete"></a>

```wing
delete(key: str): bool
```

Removes the specified element from a map.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.MutableMap.delete.parameter.key"></a>

- *Type:* str

The key.

---

##### `set` <a name="set" id="@winglang/sdk.std.MutableMap.set"></a>

```wing
set(key: str, value: T1): void
```

Adds or updates an entry in a Map object with a specified key and a value.

TODO: revisit this macro after we support indexed args https://github.com/winglang/wing/issues/1659

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.std.MutableMap.set.parameter.key"></a>

- *Type:* str

The key of the element to add.

---

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.MutableMap.set.parameter.value"></a>

- *Type:* std.T1

The value of the element to add.

---




### MutableSet <a name="MutableSet" id="@winglang/sdk.std.MutableSet"></a>

Mutable Set.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.MutableSet.Initializer"></a>

```wing
bring std;

new std.MutableSet()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.MutableSet.copy">copy</a></code> | Create an immutable shallow copy of this set. |
| <code><a href="#@winglang/sdk.std.MutableSet.copyMut">copy_mut</a></code> | Create a mutable shallow copy of this set. |
| <code><a href="#@winglang/sdk.std.MutableSet.has">has</a></code> | Returns a boolean indicating whether an element with the specified value exists in the set. |
| <code><a href="#@winglang/sdk.std.MutableSet.add">add</a></code> | Add value to set. |
| <code><a href="#@winglang/sdk.std.MutableSet.clear">clear</a></code> | The clear() method removes all elements from a set. |
| <code><a href="#@winglang/sdk.std.MutableSet.delete">delete</a></code> | Removes a specified value from a set, if it is in the set. |

---

##### `copy` <a name="copy" id="@winglang/sdk.std.MutableSet.copy"></a>

```wing
copy(): ImmutableSet
```

Create an immutable shallow copy of this set.

##### `copy_mut` <a name="copy_mut" id="@winglang/sdk.std.MutableSet.copyMut"></a>

```wing
copy_mut(): MutableSet
```

Create a mutable shallow copy of this set.

##### `has` <a name="has" id="@winglang/sdk.std.MutableSet.has"></a>

```wing
has(value: T1): bool
```

Returns a boolean indicating whether an element with the specified value exists in the set.

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.MutableSet.has.parameter.value"></a>

- *Type:* std.T1

The value to test for presence in the Set object.

---

##### `add` <a name="add" id="@winglang/sdk.std.MutableSet.add"></a>

```wing
add(value: T1): MutableSet
```

Add value to set.

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.MutableSet.add.parameter.value"></a>

- *Type:* std.T1

value to add.

---

##### `clear` <a name="clear" id="@winglang/sdk.std.MutableSet.clear"></a>

```wing
clear(): void
```

The clear() method removes all elements from a set.

##### `delete` <a name="delete" id="@winglang/sdk.std.MutableSet.delete"></a>

```wing
delete(value: T1): bool
```

Removes a specified value from a set, if it is in the set.

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.std.MutableSet.delete.parameter.value"></a>

- *Type:* std.T1

The value to remove from the set.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.MutableSet.property.size">size</a></code> | <code>num</code> | The length of the set. |

---

##### `size`<sup>Required</sup> <a name="size" id="@winglang/sdk.std.MutableSet.property.size"></a>

```wing
size: num;
```

- *Type:* num

The length of the set.

---


### NodeJsCode <a name="NodeJsCode" id="@winglang/sdk.core.NodeJsCode"></a>

Reference to a piece of Node.js code.


#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.NodeJsCode.fromFile">from_file</a></code> | Reference code from a file path. |
| <code><a href="#@winglang/sdk.core.NodeJsCode.fromInline">from_inline</a></code> | Reference code directly from a string. |

---

##### `from_file` <a name="from_file" id="@winglang/sdk.core.NodeJsCode.fromFile"></a>

```wing
bring core;

core.NodeJsCode.from_file(path: str)
```

Reference code from a file path.

###### `path`<sup>Required</sup> <a name="path" id="@winglang/sdk.core.NodeJsCode.fromFile.parameter.path"></a>

- *Type:* str

---

##### `from_inline` <a name="from_inline" id="@winglang/sdk.core.NodeJsCode.fromInline"></a>

```wing
bring core;

core.NodeJsCode.from_inline(text: str)
```

Reference code directly from a string.

###### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.core.NodeJsCode.fromInline.parameter.text"></a>

- *Type:* str

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.NodeJsCode.property.hash">hash</a></code> | <code>str</code> | Generate a hash of the code contents. |
| <code><a href="#@winglang/sdk.core.NodeJsCode.property.language">language</a></code> | <code>core.Language</code> | The language of the code. |
| <code><a href="#@winglang/sdk.core.NodeJsCode.property.path">path</a></code> | <code>str</code> | A path to the code in the user's file system that can be referenced for bundling purposes. |
| <code><a href="#@winglang/sdk.core.NodeJsCode.property.text">text</a></code> | <code>str</code> | The code contents. |

---

##### `hash`<sup>Required</sup> <a name="hash" id="@winglang/sdk.core.NodeJsCode.property.hash"></a>

```wing
hash: str;
```

- *Type:* str

Generate a hash of the code contents.

---

##### `language`<sup>Required</sup> <a name="language" id="@winglang/sdk.core.NodeJsCode.property.language"></a>

```wing
language: Language;
```

- *Type:* core.Language

The language of the code.

---

##### `path`<sup>Required</sup> <a name="path" id="@winglang/sdk.core.NodeJsCode.property.path"></a>

```wing
path: str;
```

- *Type:* str

A path to the code in the user's file system that can be referenced for bundling purposes.

---

##### `text`<sup>Required</sup> <a name="text" id="@winglang/sdk.core.NodeJsCode.property.text"></a>

```wing
text: str;
```

- *Type:* str

The code contents.

---


### String <a name="String" id="@winglang/sdk.std.String"></a>

String.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.String.Initializer"></a>

```wing
bring std;

new std.String()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.std.String.at">at</a></code> | Returns the character at the specified index. |
| <code><a href="#@winglang/sdk.std.String.concat">concat</a></code> | Combines the text of two (or more) strings and returns a new string. |
| <code><a href="#@winglang/sdk.std.String.contains">contains</a></code> | Checks if string includes substring. |
| <code><a href="#@winglang/sdk.std.String.ends">ends</a></code> | Does this string end with the given searchString? |
| <code><a href="#@winglang/sdk.std.String.indexOf">index_of</a></code> | Returns the index of the first occurrence of searchString found. |
| <code><a href="#@winglang/sdk.std.String.lowercase">lowercase</a></code> | Returns this string in lower case. |
| <code><a href="#@winglang/sdk.std.String.split">split</a></code> | Splits string by separator. |
| <code><a href="#@winglang/sdk.std.String.starts">starts</a></code> | Does this string start with the given searchString? |
| <code><a href="#@winglang/sdk.std.String.substring">substring</a></code> | Returns a string between indexStart, indexEnd. |
| <code><a href="#@winglang/sdk.std.String.trim">trim</a></code> | Removes white spaces from start and end of this string. |
| <code><a href="#@winglang/sdk.std.String.uppercase">uppercase</a></code> | Returns this string in upper case. |

---

##### `at` <a name="at" id="@winglang/sdk.std.String.at"></a>

```wing
at(index: num): str
```

Returns the character at the specified index.

###### `index`<sup>Required</sup> <a name="index" id="@winglang/sdk.std.String.at.parameter.index"></a>

- *Type:* num

position of the character.

---

##### `concat` <a name="concat" id="@winglang/sdk.std.String.concat"></a>

```wing
concat(str_n: str): str
```

Combines the text of two (or more) strings and returns a new string.

###### `str_n`<sup>Required</sup> <a name="str_n" id="@winglang/sdk.std.String.concat.parameter.strN"></a>

- *Type:* str

one or more strings to concatenate to this string.

---

##### `contains` <a name="contains" id="@winglang/sdk.std.String.contains"></a>

```wing
contains(search_string: str): bool
```

Checks if string includes substring.

###### `search_string`<sup>Required</sup> <a name="search_string" id="@winglang/sdk.std.String.contains.parameter.searchString"></a>

- *Type:* str

substring to search for.

---

##### `ends` <a name="ends" id="@winglang/sdk.std.String.ends"></a>

```wing
ends(search_string: str): bool
```

Does this string end with the given searchString?

###### `search_string`<sup>Required</sup> <a name="search_string" id="@winglang/sdk.std.String.ends.parameter.searchString"></a>

- *Type:* str

substring to search for.

---

##### `index_of` <a name="index_of" id="@winglang/sdk.std.String.indexOf"></a>

```wing
index_of(search_string: str): num
```

Returns the index of the first occurrence of searchString found.

###### `search_string`<sup>Required</sup> <a name="search_string" id="@winglang/sdk.std.String.indexOf.parameter.searchString"></a>

- *Type:* str

substring to search for.

---

##### `lowercase` <a name="lowercase" id="@winglang/sdk.std.String.lowercase"></a>

```wing
lowercase(): str
```

Returns this string in lower case.

##### `split` <a name="split" id="@winglang/sdk.std.String.split"></a>

```wing
split(separator: str): MutArray<str>
```

Splits string by separator.

###### `separator`<sup>Required</sup> <a name="separator" id="@winglang/sdk.std.String.split.parameter.separator"></a>

- *Type:* str

separator to split by.

---

##### `starts` <a name="starts" id="@winglang/sdk.std.String.starts"></a>

```wing
starts(search_string: str): bool
```

Does this string start with the given searchString?

###### `search_string`<sup>Required</sup> <a name="search_string" id="@winglang/sdk.std.String.starts.parameter.searchString"></a>

- *Type:* str

substring to search for.

---

##### `substring` <a name="substring" id="@winglang/sdk.std.String.substring"></a>

```wing
substring(index_start: num, index_end?: num): str
```

Returns a string between indexStart, indexEnd.

###### `index_start`<sup>Required</sup> <a name="index_start" id="@winglang/sdk.std.String.substring.parameter.indexStart"></a>

- *Type:* num

index of the character we slice at.

---

###### `index_end`<sup>Optional</sup> <a name="index_end" id="@winglang/sdk.std.String.substring.parameter.indexEnd"></a>

- *Type:* num

optional - index of the character we end slicing at.

---

##### `trim` <a name="trim" id="@winglang/sdk.std.String.trim"></a>

```wing
trim(): str
```

Removes white spaces from start and end of this string.

##### `uppercase` <a name="uppercase" id="@winglang/sdk.std.String.uppercase"></a>

```wing
uppercase(): str
```

Returns this string in upper case.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.std.String.property.length">length</a></code> | <code>num</code> | The length of the string. |

---

##### `length`<sup>Required</sup> <a name="length" id="@winglang/sdk.std.String.property.length"></a>

```wing
length: num;
```

- *Type:* num

The length of the string.

---


### T1 <a name="T1" id="@winglang/sdk.std.T1"></a>

Generic type argument.

This type is replaced at compile time.

#### Initializers <a name="Initializers" id="@winglang/sdk.std.T1.Initializer"></a>

```wing
bring std;

new std.T1()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---





### TreeInspector <a name="TreeInspector" id="@winglang/sdk.core.TreeInspector"></a>

Inspector that maintains an attribute bag.

#### Initializers <a name="Initializers" id="@winglang/sdk.core.TreeInspector.Initializer"></a>

```wing
bring core;

new core.TreeInspector()
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.TreeInspector.addAttribute">add_attribute</a></code> | Adds attribute to bag. |

---

##### `add_attribute` <a name="add_attribute" id="@winglang/sdk.core.TreeInspector.addAttribute"></a>

```wing
add_attribute(key: str, value: any): void
```

Adds attribute to bag.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.core.TreeInspector.addAttribute.parameter.key"></a>

- *Type:* str

key for metadata.

---

###### `value`<sup>Required</sup> <a name="value" id="@winglang/sdk.core.TreeInspector.addAttribute.parameter.value"></a>

- *Type:* any

value of metadata.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.TreeInspector.property.attributes">attributes</a></code> | <code>MutMap&lt;any&gt;</code> | Represents the bag of attributes as key-value pairs. |

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@winglang/sdk.core.TreeInspector.property.attributes"></a>

```wing
attributes: MutMap<any>;
```

- *Type:* MutMap&lt;any&gt;

Represents the bag of attributes as key-value pairs.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IApp <a name="IApp" id="@winglang/sdk.core.IApp"></a>

- *Extends:* constructs.IConstruct

- *Implemented By:* core.CdktfApp, sim.App, testing.SimApp, tfaws.App, tfazure.App, tfgcp.App, core.IApp

A Wing application.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.IApp.synth">synth</a></code> | Synthesize the app into an artifact. |

---

##### `synth` <a name="synth" id="@winglang/sdk.core.IApp.synth"></a>

```wing
synth(): str
```

Synthesize the app into an artifact.

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.IApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.core.IApp.property.outdir">outdir</a></code> | <code>str</code> | Directory where artifacts are synthesized to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.core.IApp.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@winglang/sdk.core.IApp.property.outdir"></a>

```wing
outdir: str;
```

- *Type:* str

Directory where artifacts are synthesized to.

---

### IBucketClient <a name="IBucketClient" id="@winglang/sdk.cloud.IBucketClient"></a>

- *Implemented By:* cloud.IBucketClient

Inflight interface for `Bucket`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IBucketClient.delete">delete</a></code> | Delete an existing object using a key from the bucket. |
| <code><a href="#@winglang/sdk.cloud.IBucketClient.get">get</a></code> | Retrieve an object from the bucket. |
| <code><a href="#@winglang/sdk.cloud.IBucketClient.list">list</a></code> | Retrieve existing objects keys from the bucket. |
| <code><a href="#@winglang/sdk.cloud.IBucketClient.put">put</a></code> | Put an object in the bucket. |

---

##### `delete` <a name="delete" id="@winglang/sdk.cloud.IBucketClient.delete"></a>

```wing
delete(key: str, opts?: BucketDeleteOptions): void
```

**Inflight client:** [true](#true)

Delete an existing object using a key from the bucket.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.cloud.IBucketClient.delete.parameter.key"></a>

- *Type:* str

Key of the object.

---

###### `opts`<sup>Optional</sup> <a name="opts" id="@winglang/sdk.cloud.IBucketClient.delete.parameter.opts"></a>

- *Type:* cloud.BucketDeleteOptions

Options available for delete an item from a bucket.

---

##### `get` <a name="get" id="@winglang/sdk.cloud.IBucketClient.get"></a>

```wing
get(key: str): str
```

**Inflight client:** [true](#true)

Retrieve an object from the bucket.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.cloud.IBucketClient.get.parameter.key"></a>

- *Type:* str

Key of the object.

---

##### `list` <a name="list" id="@winglang/sdk.cloud.IBucketClient.list"></a>

```wing
list(prefix?: str): MutArray<str>
```

**Inflight client:** [true](#true)

Retrieve existing objects keys from the bucket.

###### `prefix`<sup>Optional</sup> <a name="prefix" id="@winglang/sdk.cloud.IBucketClient.list.parameter.prefix"></a>

- *Type:* str

Limits the response to keys that begin with the specified prefix.

---

##### `put` <a name="put" id="@winglang/sdk.cloud.IBucketClient.put"></a>

```wing
put(key: str, body: str): void
```

**Inflight client:** [true](#true)

Put an object in the bucket.

###### `key`<sup>Required</sup> <a name="key" id="@winglang/sdk.cloud.IBucketClient.put.parameter.key"></a>

- *Type:* str

Key of the object.

---

###### `body`<sup>Required</sup> <a name="body" id="@winglang/sdk.cloud.IBucketClient.put.parameter.body"></a>

- *Type:* str

Content of the object we want to store into the bucket.

---


### ICounterClient <a name="ICounterClient" id="@winglang/sdk.cloud.ICounterClient"></a>

- *Implemented By:* cloud.CounterClientBase, cloud.ICounterClient

Inflight interface for `Counter`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.ICounterClient.dec">dec</a></code> | Decrement the counter, returning the previous value. |
| <code><a href="#@winglang/sdk.cloud.ICounterClient.inc">inc</a></code> | Increments the counter atomically by a certain amount and returns the previous value. |
| <code><a href="#@winglang/sdk.cloud.ICounterClient.peek">peek</a></code> | Get the current value of the counter. |

---

##### `dec` <a name="dec" id="@winglang/sdk.cloud.ICounterClient.dec"></a>

```wing
dec(amount?: num): num
```

**Inflight client:** [true](#true)

Decrement the counter, returning the previous value.

###### `amount`<sup>Optional</sup> <a name="amount" id="@winglang/sdk.cloud.ICounterClient.dec.parameter.amount"></a>

- *Type:* num

amount to decrement (default is 1).

---

##### `inc` <a name="inc" id="@winglang/sdk.cloud.ICounterClient.inc"></a>

```wing
inc(amount?: num): num
```

**Inflight client:** [true](#true)

Increments the counter atomically by a certain amount and returns the previous value.

###### `amount`<sup>Optional</sup> <a name="amount" id="@winglang/sdk.cloud.ICounterClient.inc.parameter.amount"></a>

- *Type:* num

amount to increment (default is 1).

---

##### `peek` <a name="peek" id="@winglang/sdk.cloud.ICounterClient.peek"></a>

```wing
peek(): num
```

**Inflight client:** [true](#true)

Get the current value of the counter.

Using this API may introduce race conditions since the value can change between
the time it is read and the time it is used in your code.


### IFunctionClient <a name="IFunctionClient" id="@winglang/sdk.cloud.IFunctionClient"></a>

- *Implemented By:* cloud.IFunctionClient

Inflight interface for `Function`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IFunctionClient.invoke">invoke</a></code> | Invoke the function asynchronously with a given payload. |

---

##### `invoke` <a name="invoke" id="@winglang/sdk.cloud.IFunctionClient.invoke"></a>

```wing
invoke(payload: str): str
```

**Inflight client:** [true](#true)

Invoke the function asynchronously with a given payload.

###### `payload`<sup>Required</sup> <a name="payload" id="@winglang/sdk.cloud.IFunctionClient.invoke.parameter.payload"></a>

- *Type:* str

---


### IFunctionHandler <a name="IFunctionHandler" id="@winglang/sdk.cloud.IFunctionHandler"></a>

- *Extends:* core.IResource

- *Implemented By:* cloud.IFunctionHandler

**Inflight client:** [wingsdk.cloud.IFunctionHandlerClient](#wingsdk.cloud.IFunctionHandlerClient)

Represents a resource with an inflight "handle" method that can be used to create a `cloud.Function`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.IFunctionHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.IFunctionHandler.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.IFunctionHandler.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.IFunctionHandler.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### IFunctionHandlerClient <a name="IFunctionHandlerClient" id="@winglang/sdk.cloud.IFunctionHandlerClient"></a>

- *Implemented By:* cloud.IFunctionHandlerClient

Inflight client for `IFunctionHandler`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IFunctionHandlerClient.handle">handle</a></code> | Entrypoint function that will be called when the cloud function is invoked. |

---

##### `handle` <a name="handle" id="@winglang/sdk.cloud.IFunctionHandlerClient.handle"></a>

```wing
handle(event: str): void
```

**Inflight client:** [true](#true)

Entrypoint function that will be called when the cloud function is invoked.

###### `event`<sup>Required</sup> <a name="event" id="@winglang/sdk.cloud.IFunctionHandlerClient.handle.parameter.event"></a>

- *Type:* str

---


### IInflightHost <a name="IInflightHost" id="@winglang/sdk.core.IInflightHost"></a>

- *Extends:* core.IResource

- *Implemented By:* cloud.Function, cloud.FunctionBase, sim.Function, tfaws.Function, tfazure.Function, core.IInflightHost

A resource that can run inflight code.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.IInflightHost.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.core.IInflightHost.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.core.IInflightHost.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.core.IInflightHost.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### IInspectable <a name="IInspectable" id="@winglang/sdk.core.IInspectable"></a>

- *Implemented By:* cloud.Bucket, cloud.BucketBase, cloud.Counter, cloud.CounterBase, cloud.Function, cloud.FunctionBase, cloud.Logger, cloud.LoggerBase, cloud.Queue, cloud.QueueBase, cloud.Schedule, cloud.ScheduleBase, cloud.Topic, cloud.TopicBase, core.Inflight, core.Resource, sim.Bucket, sim.Counter, sim.Function, sim.Logger, sim.Queue, sim.Topic, tfaws.Bucket, tfaws.Counter, tfaws.Function, tfaws.Queue, tfaws.Schedule, tfazure.Bucket, tfazure.Function, tfgcp.Bucket, tfgcp.Logger, cloud.IFunctionHandler, cloud.IQueueOnMessageHandler, cloud.IScheduleOnTickHandler, cloud.ITopicOnMessageHandler, core.IInflightHost, core.IInspectable, core.IResource

Interface for examining a construct and exposing metadata.



### ILoggerClient <a name="ILoggerClient" id="@winglang/sdk.cloud.ILoggerClient"></a>

- *Implemented By:* cloud.ILoggerClient

Inflight interface for `Logger`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.ILoggerClient.print">print</a></code> | Logs a message. The log will be associated with whichever resource is running the inflight code. |

---

##### `print` <a name="print" id="@winglang/sdk.cloud.ILoggerClient.print"></a>

```wing
print(message: str): void
```

**Inflight client:** [true](#true)

Logs a message. The log will be associated with whichever resource is running the inflight code.

NOTICE: this is not an async function because it is wrapped by `console.log()`.

###### `message`<sup>Required</sup> <a name="message" id="@winglang/sdk.cloud.ILoggerClient.print.parameter.message"></a>

- *Type:* str

The message to print.

---


### IQueueClient <a name="IQueueClient" id="@winglang/sdk.cloud.IQueueClient"></a>

- *Implemented By:* cloud.IQueueClient

Inflight interface for `Queue`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IQueueClient.approxSize">approx_size</a></code> | Retrieve the approximate number of messages in the queue. |
| <code><a href="#@winglang/sdk.cloud.IQueueClient.purge">purge</a></code> | Purge all of the messages in the queue. |
| <code><a href="#@winglang/sdk.cloud.IQueueClient.push">push</a></code> | Push a message to the queue. |

---

##### `approx_size` <a name="approx_size" id="@winglang/sdk.cloud.IQueueClient.approxSize"></a>

```wing
approx_size(): num
```

**Inflight client:** [true](#true)

Retrieve the approximate number of messages in the queue.

##### `purge` <a name="purge" id="@winglang/sdk.cloud.IQueueClient.purge"></a>

```wing
purge(): void
```

**Inflight client:** [true](#true)

Purge all of the messages in the queue.

##### `push` <a name="push" id="@winglang/sdk.cloud.IQueueClient.push"></a>

```wing
push(message: str): void
```

**Inflight client:** [true](#true)

Push a message to the queue.

###### `message`<sup>Required</sup> <a name="message" id="@winglang/sdk.cloud.IQueueClient.push.parameter.message"></a>

- *Type:* str

Payload to send to the queue.

---


### IQueueOnMessageHandler <a name="IQueueOnMessageHandler" id="@winglang/sdk.cloud.IQueueOnMessageHandler"></a>

- *Extends:* core.IResource

- *Implemented By:* cloud.IQueueOnMessageHandler

**Inflight client:** [wingsdk.cloud.IQueueOnMessageHandlerClient](#wingsdk.cloud.IQueueOnMessageHandlerClient)

Represents a resource with an inflight "handle" method that can be passed to `Queue.on_message`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.IQueueOnMessageHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.IQueueOnMessageHandler.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.IQueueOnMessageHandler.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.IQueueOnMessageHandler.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### IQueueOnMessageHandlerClient <a name="IQueueOnMessageHandlerClient" id="@winglang/sdk.cloud.IQueueOnMessageHandlerClient"></a>

- *Implemented By:* cloud.IQueueOnMessageHandlerClient

Inflight client for `IQueueOnMessageHandler`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IQueueOnMessageHandlerClient.handle">handle</a></code> | Function that will be called when a message is received from the queue. |

---

##### `handle` <a name="handle" id="@winglang/sdk.cloud.IQueueOnMessageHandlerClient.handle"></a>

```wing
handle(message: str): void
```

**Inflight client:** [true](#true)

Function that will be called when a message is received from the queue.

###### `message`<sup>Required</sup> <a name="message" id="@winglang/sdk.cloud.IQueueOnMessageHandlerClient.handle.parameter.message"></a>

- *Type:* str

---


### IResource <a name="IResource" id="@winglang/sdk.core.IResource"></a>

- *Extends:* core.IInspectable, constructs.IConstruct

- *Implemented By:* cloud.Bucket, cloud.BucketBase, cloud.Counter, cloud.CounterBase, cloud.Function, cloud.FunctionBase, cloud.Logger, cloud.LoggerBase, cloud.Queue, cloud.QueueBase, cloud.Schedule, cloud.ScheduleBase, cloud.Topic, cloud.TopicBase, core.Inflight, core.Resource, sim.Bucket, sim.Counter, sim.Function, sim.Logger, sim.Queue, sim.Topic, tfaws.Bucket, tfaws.Counter, tfaws.Function, tfaws.Queue, tfaws.Schedule, tfazure.Bucket, tfazure.Function, tfgcp.Bucket, tfgcp.Logger, cloud.IFunctionHandler, cloud.IQueueOnMessageHandler, cloud.IScheduleOnTickHandler, cloud.ITopicOnMessageHandler, core.IInflightHost, core.IResource

Abstract interface for `Resource`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.core.IResource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.core.IResource.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.core.IResource.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.core.IResource.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### IScheduleOnTickHandler <a name="IScheduleOnTickHandler" id="@winglang/sdk.cloud.IScheduleOnTickHandler"></a>

- *Extends:* core.IResource

- *Implemented By:* cloud.IScheduleOnTickHandler

**Inflight client:** [wingsdk.cloud.IScheduleOnTickHandlerClient](#wingsdk.cloud.IScheduleOnTickHandlerClient)

Represents a resource with an inflight "handle" method that can be passed to `Schedule.on_tick`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.IScheduleOnTickHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.IScheduleOnTickHandler.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.IScheduleOnTickHandler.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.IScheduleOnTickHandler.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### IScheduleOnTickHandlerClient <a name="IScheduleOnTickHandlerClient" id="@winglang/sdk.cloud.IScheduleOnTickHandlerClient"></a>

- *Implemented By:* cloud.IScheduleOnTickHandlerClient

Inflight client for `IScheduleOnTickHandler`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.IScheduleOnTickHandlerClient.handle">handle</a></code> | Function that will be called when a message is received from the schedule. |

---

##### `handle` <a name="handle" id="@winglang/sdk.cloud.IScheduleOnTickHandlerClient.handle"></a>

```wing
handle(): void
```

**Inflight client:** [true](#true)

Function that will be called when a message is received from the schedule.


### ITopicClient <a name="ITopicClient" id="@winglang/sdk.cloud.ITopicClient"></a>

- *Implemented By:* cloud.ITopicClient

Inflight interface for `Topic`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.ITopicClient.publish">publish</a></code> | Publish message to topic. |

---

##### `publish` <a name="publish" id="@winglang/sdk.cloud.ITopicClient.publish"></a>

```wing
publish(message: str): void
```

**Inflight client:** [true](#true)

Publish message to topic.

###### `message`<sup>Required</sup> <a name="message" id="@winglang/sdk.cloud.ITopicClient.publish.parameter.message"></a>

- *Type:* str

Payload to publish to Topic.

---


### ITopicOnMessageHandler <a name="ITopicOnMessageHandler" id="@winglang/sdk.cloud.ITopicOnMessageHandler"></a>

- *Extends:* core.IResource

- *Implemented By:* cloud.ITopicOnMessageHandler

**Inflight client:** [wingsdk.cloud.ITopicOnMessageHandlerClient](#wingsdk.cloud.ITopicOnMessageHandlerClient)

Represents a resource with an inflight "handle" method that can be passed to `Topic.on_message`.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@winglang/sdk.cloud.ITopicOnMessageHandler.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@winglang/sdk.cloud.ITopicOnMessageHandler.property.display">display</a></code> | <code>core.Display</code> | Information on how to display a resource in the UI. |

---

##### `node`<sup>Required</sup> <a name="node" id="@winglang/sdk.cloud.ITopicOnMessageHandler.property.node"></a>

```wing
node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `display`<sup>Required</sup> <a name="display" id="@winglang/sdk.cloud.ITopicOnMessageHandler.property.display"></a>

```wing
display: Display;
```

- *Type:* core.Display

Information on how to display a resource in the UI.

---

### ITopicOnMessageHandlerClient <a name="ITopicOnMessageHandlerClient" id="@winglang/sdk.cloud.ITopicOnMessageHandlerClient"></a>

- *Implemented By:* cloud.ITopicOnMessageHandlerClient

Inflight client for `ITopicOnMessageHandler`.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.cloud.ITopicOnMessageHandlerClient.handle">handle</a></code> | Function that will be called when a message is received from the topic. |

---

##### `handle` <a name="handle" id="@winglang/sdk.cloud.ITopicOnMessageHandlerClient.handle"></a>

```wing
handle(event: str): void
```

**Inflight client:** [true](#true)

Function that will be called when a message is received from the topic.

###### `event`<sup>Required</sup> <a name="event" id="@winglang/sdk.cloud.ITopicOnMessageHandlerClient.handle.parameter.event"></a>

- *Type:* str

---


## Enums <a name="Enums" id="Enums"></a>

### Direction <a name="Direction" id="@winglang/sdk.core.Direction"></a>

The direction of a connection.

Visually speaking, if a resource A has an outbound connection with resource B,
the arrow would point from A to B, and vice versa for inbound connections.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.Direction.OUTBOUND">OUTBOUND</a></code> | Indicates that this resource calls, triggers, or references the resource it is connected to. |
| <code><a href="#@winglang/sdk.core.Direction.INBOUND">INBOUND</a></code> | Indicates that this resource is called, triggered, or referenced by the resource it is connected to. |

---

##### `OUTBOUND` <a name="OUTBOUND" id="@winglang/sdk.core.Direction.OUTBOUND"></a>

Indicates that this resource calls, triggers, or references the resource it is connected to.

---


##### `INBOUND` <a name="INBOUND" id="@winglang/sdk.core.Direction.INBOUND"></a>

Indicates that this resource is called, triggered, or referenced by the resource it is connected to.

---


### Language <a name="Language" id="@winglang/sdk.core.Language"></a>

The language of a piece of code.

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@winglang/sdk.core.Language.NODE_JS">NODE_JS</a></code> | Node.js. |

---

##### `NODE_JS` <a name="NODE_JS" id="@winglang/sdk.core.Language.NODE_JS"></a>

Node.js.

---

