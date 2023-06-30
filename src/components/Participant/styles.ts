import { StyleSheet } from 'react-native'

import { COLOR } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLOR.GRAY,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    color: COLOR.WHITE,
    fontSize: 16,
    marginLeft: 16,
    flex: 1,
  },
  button: {
    height: 56,
    width: 56,
    borderRadius: 5,
    backgroundColor: COLOR.RED,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: COLOR.WHITE,
    fontSize: 24,
  },
})
