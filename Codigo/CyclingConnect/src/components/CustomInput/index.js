import React, {useState} from 'react';
import {View} from 'react-native';
import * as S from './styles';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-regular-svg-icons';

function CustomInput({
  icon,
  onPressIcon,
  isPassword,
  label,
  hasMargin,
  secureTextEntry,
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <S.Container hasMargin={hasMargin}>
        <S.Label>{label}</S.Label>
        <S.Wrapper>
          <S.Input
            secureTextEntry={
              isPassword ? isPassword && !isVisible : secureTextEntry
            }
            {...props}
          />
          {icon && (
            <S.IconButton onPress={onPressIcon}>
              <FontAwesomeIcon icon={icon} size={16} color={'#747476'} />
            </S.IconButton>
          )}
          {isPassword && (
            <S.IconButton onPress={() => setIsVisible(!isVisible)}>
              <FontAwesomeIcon
                icon={!isVisible ? faEye : faEyeSlash}
                size={16}
                color={'#747476'}
              />
            </S.IconButton>
          )}
        </S.Wrapper>
      </S.Container>
    </>
  );
}

export default CustomInput;
