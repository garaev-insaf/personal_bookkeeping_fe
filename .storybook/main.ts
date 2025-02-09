import type { StorybookConfig } from '@storybook/react-vite';
// import '@shared/styles/main.scss';

const config: StorybookConfig = {
    stories: [
        '../src/@(shared|app|accounts)/**/*.mdx',
        '../src/@(shared|app|accounts)/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
};

export default config;
