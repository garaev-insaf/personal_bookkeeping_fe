import { buttonConfig } from '@shared/ui';
import { ThemeConfig } from 'antd';

export const themeConfig: ThemeConfig = {
    token: {
        fontFamily: 'Inter',
        colorPrimary: 'var(--primary-300)',
        colorPrimaryHover: 'var(--primary-50)',
        colorError: 'var(--alert-error-100)',
        lineWidthFocus: 2,
    },
    components: {
        Button: buttonConfig,
        //     Radio: radioConfig,
        //     Segmented: switchToggleConfig,
        //     Input: inputConfig,
        //     Select: selectConfig,
        //     Tabs: tabsConfig,
        //     Layout: layoutConfig,
        //     Menu: menuConfig,
        //     Switch: toggleConfig,
        //     Pagination: paginationConfig,
        //     Table: tableConfigDefault,
        //     Modal: modalConfigDefault,
        //     DatePicker: datePickerConfig,
        //     Tree: treeConfig,
        //     Collapse: collapseConfig,
    },
    hashed: false,
};
