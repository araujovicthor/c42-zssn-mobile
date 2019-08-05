import { StyleSheet } from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 30,
    backgroundColor: colors.background,
  },

  div: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },

  image: {
    width: 80,
    height: 80,
  },
});

export default styles;
