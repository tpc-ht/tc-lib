export const filter = (type: string, component: string, arr?: any) => {
    switch (type) {
        case 'radio':
            if (arr) return 'Radio.Group';
            break;
        case 'checkbox':
            if (arr) return 'Checkbox.Group';
            break;
    }
    return component;
};
