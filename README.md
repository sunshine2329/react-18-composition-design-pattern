# react-container-presentation-pattern

React components typically contain a mix of logic and presentation. By logic, we refer to anything that is unrelated to the UI, such as API calls, data manipulation, and event handlers. The presentation is the part of the render where we create the elements to be displayed on the UI.

In React, there are simple and powerful patterns, known as container and presentational, which we can apply when creating components that help us to separate those two concerns.

Creating well-defined boundaries between logic and presentation not only makes components more reusable.

This pattern is simple but very powerful, and when applied to big applications, it can make a difference when it comes to the speed of development and the maintainability of the project. On the other hand, applying this pattern without a real reason can give us the opposite problem and make the code base less useful as it involves the creation of more files and components.

So, we should think carefully when we decide that a component has to be refactored following the container and presentational patterns. In general, the right path to follow is starting with a single component and splitting it only when the logic and the presentation become too coupled where they shouldn’t be.

Deciding what to put in the container and what goes into the presentation is not always straightforward; the following points should help you make that decision:

The following are the characteristics of container components:
- They are more co- ncerned with behavior.
- They render their presentational components.
- They make API calls and manipulate data.
- They define event handlers.

The following are the characteristics of presentational components:
- They are more concerned with the visual representation.
- They render the HTML markup (or other components).
- They receive data from the parents in the form of props.
- They are often written as stateless functional components.

As you can see, these patterns form a really powerful tool that will help you to develop your web applications faster.
