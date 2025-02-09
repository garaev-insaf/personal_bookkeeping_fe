import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button.tsx';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    render: () => (
        <div>
            <Button>Click me</Button>
        </div>
    ),
};
