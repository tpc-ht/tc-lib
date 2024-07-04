import { ISchema } from "@formily/react";
import { assignObj } from "@tc-lib/utils";
import { PatchesConfigType } from "./type";

const patchesConfig: { [key: string]: PatchesConfigType } = {
    string: {
        component: 'Input',
        props: {
            placeholder: '请输入',
            allowClear: true,
        },
        validator: [{ whitespace: true }],
    },
    password: {
        component: 'Password',
        props: {
            placeholder: '请输入',
            allowClear: true,
            checkStrength: true,
            autoComplete: 'new-password',
        },
        validator: [{ whitespace: true }],
    },
    textarea: {
        component: 'Input.TextArea',
        props: {
            placeholder: '请输入',
            rows: 4,
            maxLength: 100,
            showCount: true,
        },
    },
    number: {
        component: 'NumberPicker',
        props: {
            placeholder: '请输入',
            min: 0,
            max: 99999999,
            precision: 0,
        },
    },
    float: {
        component: 'NumberPicker',
        props: {
            placeholder: '请输入',
            min: 0,
            max: 99999999.99,
            precision: 2,
        },
    },
    select: {
        component: 'Select',
        props: {
            placeholder: '请选择',
            allowClear: true,
        },
    },
    radio: {
        component: 'Radio',
    },
    checkbox: {
        component: 'Checkbox',
    },
    cascader: {
        component: 'Cascader',
        props: {
            placeholder: '请选择',
            allowClear: true,
        },
    },
    boolean: {
        component: 'Switch',
    },
    date: {
        component: 'DatePicker',
    },
    month: {
        component: 'DatePicker',
        props: {
            format: 'YYYY-MM',
            picker: 'month',
        },
    },
    'date-range': {
        component: 'DatePicker.RangePicker',
        props: {
            format: 'YYYY-MM-DD',
        },
    },
    'date-time-range': {
        component: 'DatePicker.RangePicker',
        props: {
            showTime: { format: 'HH:mm' },
            format: 'YYYY-MM-DD HH:mm',
        },
    },
    time: {
        component: 'TimePicker',
        props: {
            format: 'HH:mm',
        },
    },
    'time-range': {
        component: 'TimePicker.RangePicker',
        props: {
            format: 'HH:mm',
        },
    },
    layout: {
        component: 'FormLayout',
        props: {
            labelWidth: 120,
            style: { padding: 10 },
        },
        noDecorator: true
    },
    grid: {
        component: 'FormGrid',
        props: {
            minWidth: 300,
            maxColumns: 4,
            rowGap: 0,
        },
        noDecorator: true
    },
    'grid-column': {
        component: 'FormGrid.GridColumn',
        noDecorator: true
    },
};
class ComponentTypeConfig {
    patchesConfig = {};
    constructor(patchesConfig: { [key: string]: string | ISchema }) {
        this.patchesConfig = patchesConfig;
    }
    set(type: string, value: PatchesConfigType) {
        let patches = this.patchesConfig[type];
        if (patches) return assignObj(patches, value);
        this.patchesConfig[type] = value;
    }
    get(type: string) {
        return this.patchesConfig[type];
    }
    has(type: string) {
        const keys = Object.keys(this.patchesConfig);
        return keys.includes(type);
    }
    // append(patchesConfig: { [key: string]: string | ISchema }) { }
}


export const componentTypeConfig = new ComponentTypeConfig(patchesConfig);