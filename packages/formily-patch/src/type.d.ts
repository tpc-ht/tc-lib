import { FormItem } from "@formily/antd";
import { FieldValidator } from "@formily/core";

export type PatchesConfigType = {
    component?: string;
    props?: any;
    decoratorProps?: typeof FormItem | any;
    validator?: FieldValidator[];
    noDecorator?: boolean;

};


type CustomSchemaPropertyType = {
    [key: string]:
    | {
        [key: string]: { 'x-component-props'?: any; 'x-decorator-props'?: any };
    }
    | string;
};