import type { Preview } from '@storybook/react';
import '@shared/styles/main.scss';
import '@/index.css';
import RouterDecorator from '@lib/stories/router-decorator.tsx';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [RouterDecorator],
};

export default preview;
