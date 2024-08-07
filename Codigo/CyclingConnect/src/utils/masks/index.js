import moment from 'moment';

export const cpfMask = value => {
  if (!value) return value;

  value = value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return value;
};

export const phoneMask = value => {
  if (!value) return value;

  value = value.replace(/\D/g, '');

  if (value.length > 11) {
    value = value.slice(0, 11);
  }

  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
};

export const genderMask = value => {
  if (!value) return value;

  if (value === 'M') {
    return 'Masculino';
  } else if (value === 'F') {
    return 'Feminino';
  }
};

export const dateMask = value => {
  if (!value) return value;

  value = value.replace(/\D/g, '');

  if (value.length > 8) {
    value = value.slice(0, 8);
  }

  value = value.replace(/(\d{2})(\d)/, '$1/$2');
  value = value.replace(/(\d{2})(\d)/, '$1/$2');

  return value;
};

export const onlyLetters = value => {
  if (!value) return value;

  value = value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
};

export const normalize = value => {
  return moment(value).format('DD/MM/YYYY');
};

export const formatValue = value => {
  return value.replace(/[^\d/]/g, '');
};
