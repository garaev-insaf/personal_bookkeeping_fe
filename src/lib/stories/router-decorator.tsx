import { StoryContext, StoryFn } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (StoryComponent: StoryFn, context: StoryContext) => (
    <BrowserRouter>
        {StoryComponent(context.args, context)}
    </BrowserRouter>
);

export default RouterDecorator;
