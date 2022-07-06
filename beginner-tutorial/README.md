# redux-saga-beginner-tutorial

Companion Repo for [Redux/Redux-saga beginner tutorial](https://github.com/redux-saga/redux-saga/blob/master/docs/introduction/BeginnerTutorial.md)

## Notes

That’s where redux-saga comes in. It defines the concept of a Saga, a declarative and well organized way to express the side-effects (Timeouts, API calls …). So instead of writing an action creator using thunk middleware, we continue dispatching synchronous actions, but instead of having a reducer handling those actions, we will have a Saga taking this action and yielding effects (simple javascript objets defining the async actions to perform).

You can think of Sagas as long-live processes that interacts with the system by:

1. Reacting to actions dispatched in the system.
2. Dispatches new actions into the system.
3. Can “wake itself” using internal mechanisms without actions being dispatched. e.g. waking up on interval

In redux-saga, a saga is a generator function that can run indefinitely inside the system. It can be woken up when a specific action is dispatched. It can dispatch additional actions, and has access to the application state atom.

In order to run our Saga, we need to:

-   create a Saga middleware with a list of Sagas to run (so far we have only one helloSaga)
-   connect the Saga middleware to the Redux store

Stuff added to `main.js`:

```
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(reducer, applyMiddleware(sagaMiddleware));

    // cannot run both!
    sagaMiddleware.run(helloSaga); ∨ sagaMiddleware.run(rootSaga);
```

Effects are plain JavaScript objects which contain instructions to be fulfilled by the middleware. When a middleware retrieves an Effect yielded by a Saga, the Saga is paused until the Effect is fulfilled.
