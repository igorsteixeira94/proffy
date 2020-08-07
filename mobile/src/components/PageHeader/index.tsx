import React, { ReactNode, useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/icons/back.png';
import logoImg from '../../assets/logo.png';

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode
}

import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const { navigate } = useNavigation();


  function handleGoBack() {
    navigate('Landing');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton
          onPress={handleGoBack}
        >
          <Image source={backIcon} resizeMode='contain' />
        </BorderlessButton>
        <Image source={logoImg} resizeMode='contain' />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>
      {children}
    </View>
  );
}

export default PageHeader;