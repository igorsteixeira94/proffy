import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import { ScrollView } from 'react-native-gesture-handler';
import TeacherItem from '../../components/TeacherItem';

function Favorites() {

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis" />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>

    </View>);

}

export default Favorites;