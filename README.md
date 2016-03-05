## reproduce

```bash
git clone https://github.com/bmullan91/react-shallow-renderer-bug.git
cd react-shallow-renderer-bug
npm install
npm test
```

## issue

The `StatelessComponent` and `StatefulComponent` when rendered with shallowRenderer, there outputs differ in the `_owner` key, see below.

## test output

```
TAP version 13
# compare StatelessComponent shallowRenderer getRenderOutput
not ok 1 should be equivalent
  ---
    operator: deepEqual
    expected: |-
      { $$typeof: 60103, _owner: null, _store: {}, key: null, props: { children: [ 'Hello ', 'Brian' ] }, ref: null, type: 'div' }
    actual: |-
      { $$typeof: 60103, _owner: { _context: {}, _currentElement: { $$typeof: 60103, _owner: null, _store: {}, key: null, props: { name: 'Brian' }, ref: null, type: [Function] }, _instance: { _reactInternalInstance: [Circular], context: {}, props: { name: 'Brian' }, refs: {}, state: null, updater: { enqueueCallback: [Function], enqueueCallbackInternal: [Function], enqueueElementInternal: [Function], enqueueForceUpdate: [Function], enqueueReplaceProps: [Function], enqueueReplacePropsInternal: [Function], enqueueReplaceState: [Function], enqueueSetProps: [Function], enqueueSetPropsInternal: [Function], enqueueSetState: [Function], isMounted: [Function] } }, _mountOrder: 1, _pendingCallbacks: null, _pendingElement: null, _pendingForceUpdate: false, _pendingReplaceState: false, _pendingStateQueue: null, _renderedComponent: { _currentElement: [Circular], _renderedOutput: [Circular] }, _rootNodeID: '.13qyw11le68', _topLevelWrapper: null }, _store: {}, key: null, props: { children: [ 'Hello ', 'Brian' ] }, ref: null, type: 'div' }
    at: Test.<anonymous> (/Users/brianmullan/workspace/react-shallow-renderer-bug/index.js:25:5)
  ...
# compare StatefulComponent shallowRenderer getRenderOutput
ok 2 should be equivalent

1..2
# tests 2
# pass  1
# fail  1
```
