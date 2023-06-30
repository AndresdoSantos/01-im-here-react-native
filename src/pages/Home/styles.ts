import { StyleSheet } from 'react-native'

import { COLOR } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  title: {
    color: COLOR.WHITE,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  subtitle: {
    color: COLOR.GRAY_LIGHT,
    fontSize: 16,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
  input: {
    backgroundColor: COLOR.GRAY,
    height: 56,
    flex: 1,
    borderRadius: 5,
    padding: 16,
    color: COLOR.WHITE,
    fontSize: 16,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: COLOR.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 24,
  },
})
