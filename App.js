import {View, Text,Button} from 'react-native';
import React from 'react';
// import Counter from './src/components/Counter';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Counter from './src/components/Counter';
import "./i18n";
import { useTranslation } from 'react-i18next';//add this line
import RNRestart from "react-native-restart";

const App = () => {
  const {t,i18n} = useTranslation();//add this line

  return (
    <View>
      <Provider store={store}>
        <Text>{t('App')}</Text>
        <Text>{t("dummy_text")}</Text>
        <Button
        title={t('changeLngBtn')}
        onPress={() => {
          i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')
          .then(() => {
            I18nManager.forceRTL(i18n.language === 'ar');
            RNRestart.Restart();
          })
          .catch(err => {
            console.log('something went wrong while applying RTL');
          });
        }}
      />
        <Counter/>
      </Provider>
    </View>
  );
};

export default App;
