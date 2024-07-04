// export * from './utils';
import {
    ISchema
} from '@formily/react';
import { componentTypeConfig } from './componentTypeConfig';
import { customSchemaProperty } from './customSchemaProperty';
import { filter } from './filter';
import { getValidatorMsg } from './validatorMsgPrefix';

const handleCustomProperty = (
    schema: ISchema,
): {
    'x-component-props': any;
    'x-decorator-props': any;
} => {
    let props: any = {
        'x-component-props': {},
        'x-decorator-props': {},
    };
    const propertyNames = customSchemaProperty.propertyNames;
    // 判断是否存在自定义属性的节点
    for (let index = 0; index < propertyNames.length; index++) {
        const propertyName = propertyNames[index];
        if (propertyName in schema) {
            // 判断自定义属性是否与当前类型关联
            if (!customSchemaProperty.isCurrentType(schema.type as string))
                return props;
            const customProperty = customSchemaProperty.getPropertyValue(
                propertyName,
                schema.type as string,
                schema[propertyName],
            );
            if (customProperty) {
                props['x-component-props'] = {
                    ...props['x-component-props'],
                    ...customProperty['x-component-props'],
                };
                props['x-decorator-props'] = {
                    ...props['x-decorator-props'],
                    ...customProperty['x-decorator-props'],
                };
            }
        }
    }
    return props;
};

const schemaPropFormat = (schema: ISchema) => {
    const type = schema.type;
    if (!(type && componentTypeConfig.has(type))) return schema;
    const patches = componentTypeConfig.get(type);
    const customProperty = handleCustomProperty(schema);
    if (patches.noDecorator) {
        return {
            ...schema,
            type: 'void',
            'x-decorator': patches.component,
            'x-decorator-props': {
                ...patches.decoratorProps,
                ...patches.props,
                ...customProperty['x-component-props'],
                ...customProperty['x-decorator-props'],
                ...schema['x-component-props'],
                ...schema['x-decorator-props'],
            },
        };
    }
    const validator = patches.validator || [];
    const xValidator = schema['x-validator'] || [];
    let component = filter(type, patches.component, schema.enum);
    const msg = getValidatorMsg(type, schema.title);
    return {
        ...schema,
        'x-decorator': schema['x-decorator'] ?? 'FormItem',
        'x-decorator-props': {
            ...patches.decoratorProps,
            ...customProperty['x-decorator-props'],
            ...schema['x-decorator-props'],
        },
        'x-component': component,
        'x-component-props': {
            ...patches.props,
            ...customProperty['x-component-props'],
            ...schema['x-component-props'],
        },
        'x-validator': [
            { required: true, message: msg },
            ...validator,
            ...xValidator,
        ],
        'x-compile-omitted': ['x-grid-span'],
    };
};

export const schemaPatch = (schema: ISchema): ISchema => {
    if (schema['x-decorator'] || schema['x-component']) return schema;
    return schemaPropFormat(schema);
};