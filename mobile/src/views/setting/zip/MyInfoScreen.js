import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

/* 컴포넌트 */
import CustomInput from '../../../components/textinput/CustomInput';


const MyInfoScreen = () => {

  const [userid, setUserid] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.myinfo_id_email}>

        <Text style={styles.title_id}>아이디</Text>
        <CustomInput
          placeholder="아이디"
          value={userid}
          setValue={setUserid}
          />

        <Text style={styles.title_email}>이메일</Text>    
        <CustomInput
          placeholder="이메일"
          value={email}
          setValue={setEmail}
          secureTextEntry={true}
          />
      </View>
      <View  style={styles.myinfo_note}>
        <Text style={styles.title_note}>메모</Text>
        <CustomInput
          placeholder="메모"
          value={note}
          setValue={setNote} />
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myinfo_id_email: {
    width: '100%',
    padding: 20,

  },
  myinfo_note: {
    width: '100%',
  //   height: 500,
    padding: 20,
  }
  
});

export default MyInfoScreen;