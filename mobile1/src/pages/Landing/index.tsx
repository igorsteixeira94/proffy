import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import styles from './styles';

import landingImg from '../../assets/landing.png';
import studyIcon from '../../assets/icons/study.png';

import giveClassesIcon from '../../assets/icons/give-classes.png';
import heartIcon from '../../assets/icons/heart.png';
import api from '../../services/api';


function Landing() {
  const navigation = useNavigation();


  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }
  function handleNavigateToStudyPages() {
    navigation.navigate('Study');
  }
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>
          O que deseja fazer ?
        </Text>
      </Text>
      <View style={styles.buttonsContainer}>

        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]} >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aula</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões já realizadas
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;