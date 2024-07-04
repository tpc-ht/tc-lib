import { assignObj, isObj, isStr } from "@tc-lib/utils";
import { CustomSchemaPropertyType } from "./type";


export const PUBLIC_TYPE_MARK = 'public';
class CustomSchemaProperty {
    private property: CustomSchemaPropertyType = {
        'x-grid-span': `${PUBLIC_TYPE_MARK}:x-decorator-props.gridSpan`,
        'x-grid-cols': 'grid.x-component-props.maxColumns',
        'x-multiple': {
            select: {
                'x-component-props': {
                    maxTagCount: 'responsive',
                    mode: 'multiple',
                },
            },
        },
    };
    propertyNames: string[] = [];
    typeNames: string[] = [];
    constructor() {
        this.init();
    }
    getPropertyValue(propertyName: string, type: string, value: any) {
        const v = this.property[propertyName];
        if (isStr(v)) {
            const paths = this.pathParse(v);
            if (paths.length !== 3) return;
            const path1 = paths[1];
            if (!path1) return;
            if ('x-component-props' === path1)
                return {
                    'x-component-props': {
                        [paths[2]]: value,
                    },
                };
            if ('x-decorator-props' === path1)
                return {
                    'x-decorator-props': {
                        [paths[2]]: value,
                    },
                };
        }
        if (isObj(v)) {
            const currentTypes = Object.keys(v);
            for (let index = 0; index < currentTypes.length; index++) {
                const currentType = currentTypes[index];
                if (type === currentType) return v[currentType];
            }
        }
    }
    append(newProperty: CustomSchemaPropertyType) {
        const propertyNames = Object.keys(newProperty);
        for (let index = 0; index < propertyNames.length; index++) {
            const propertyName = propertyNames[index];
            const value = newProperty[propertyName];
            if (propertyName in this.property) {
                if (isStr(value)) {
                    this.property[propertyName] = value;
                }
                if (isObj(value)) {
                    this.property[propertyName] = assignObj(
                        this.property[propertyName],
                        value,
                    );
                }
                continue;
            }
            this.property[propertyName] = value;
        }
        this.init();
    }
    isCurrentType(propertyName: string) {
        return this.typeNames.includes(propertyName);
    }
    private init() {
        this.propertyNames = Object.keys(this.property);
        this.typeNames = this.getTypes();
    }
    private getTypes() {
        const keys = this.propertyNames;
        let types: string[] = [];
        try {
            for (let index = 0; index < keys.length; index++) {
                const item = this.property[keys[index]];
                if (isStr(item)) {
                    const t = this.pathParse(item)[0];
                    if (t && t != PUBLIC_TYPE_MARK) types.push(t);
                }
                if (isObj(item)) {
                    const ts = Object.keys(item);
                    for (let index = 0; index < ts.length; index++) {
                        const type = ts[index];
                        if (type != PUBLIC_TYPE_MARK) types.push(type);
                    }
                }
            }
        } catch (error) { }
        return types;
    }
    private pathParse(path: string) {
        // 解析路径
        const paths = path.split('.');
        return paths;
    }
}
export const customSchemaProperty = new CustomSchemaProperty();

