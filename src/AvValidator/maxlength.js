import toNumber from 'lodash/toNumber';
import { isEmpty } from './utils';

export default function validate(value, context, constraint = {}) {
  if (isEmpty(value)) return true;

  return value.length <= toNumber(constraint.value) || constraint.errorMessage || false;
}
