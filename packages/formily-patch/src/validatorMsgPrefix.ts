

class ValidatorMsgPrefix {
    input = ['string', 'password', 'textarea', 'number', 'float'];
    select = [
        'select',
        'radio',
        'checkbox',
        'cascader',
        'boolean',
        'date',
        'month',
        'date-range',
        'datetime-range',
        'time',
        'time-range',
    ];
    getMsgPrefix(type: string) {
        if (this.input.includes(type)) return '请输入';
        if (this.select.includes(type)) return '请选择';
    }
    append(type: 'input' | 'select', value: string[]) {
        if (type === 'input') this.input.push(...value);
        if (type === 'select') this.select.push(...value);
    }
}

export const validatorMsgPrefix = new ValidatorMsgPrefix();

export const getValidatorMsg = (type: string, title?: string) => {
    if (!title) return '';
    const prefix = validatorMsgPrefix.getMsgPrefix(type);
    return prefix ? `${prefix}${title}` : '';
};