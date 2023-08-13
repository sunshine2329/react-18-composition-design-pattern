# React-18 Composition Design Pattern

## react-container-presentational-pattern

React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is the part of the render where we create the elements to be displayed on the UI.

In React, there are simple and powerful patterns, known as container and presentational, which we can apply when creating components that help us to separate those two concerns.

Creating well-defined boundaries between logic and presentation not only makes components more reusable.

This pattern is simple but very powerful, and when applied to big applications, it can make a difference when it comes to the speed of development and the maintainability of the project. On the other hand, applying this pattern without a real reason can give us the opposite problem and make the code base less useful as it involves the creation of more files and components.

So, we should think carefully when we decide that a component has to be refactored following the container and presentational patterns. In general, the right path to follow is starting with a single component and splitting it only when the logic and the presentation become too coupled where they shouldn’t be.

Deciding what to put in the container and what goes into the presentation is not always straightforward; the following points should help you make that decision:

The following are the characteristics of container components:

- They are more concerned with behavior.
- They render their presentational components.
- They make API calls and manipulate data.
- They define event handlers.

The following are the characteristics of presentational components:

- They are more concerned with the visual representation.
- They render the HTML markup (or other components).
- They receive data from the parents in the form of props.
- They are often written as stateless functional components.

As you can see, these patterns form a really powerful tool that will help you to develop your web applications faster.

## Higher-Order Functions(HoFs)

HoFs are functions that take a function as a parameter, and optionally some other parameters, and return a function. The returned function is usually enhanced with some special behaviors.

## Higher-order Component(HOCs)

Applying the idea of HOFs to components results in higher-order components (HOCs).

HOCs are functions that take a component as input and return an enhanced component as output.

HOCs typically spread the props they receive on the component because they aim to be transparent and only add new behavior.

By using HOCs, we avoid polluting any state and don’t require the component to implement any function. This means the component and HOC are not coupled, and both can be reused throughout the application.

Using props instead of state allows us to create a “dumb” component that can be used in our style guide, ignoring complex logic and just passing down the props.

## FunctionAsChild

The FunctionAsChild pattern is gaining consensus within the React community. It is widely used in popular libraries like react-motion.

The main concept is that instead of passing a child as a component, we define a function that can receive parameters from the parent.

As you can see, FunctionAsChild is a component with a children property defined as a function. Instead of being used as a JSX expression, it gets called.
