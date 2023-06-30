import { Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home() {
  function handleAddParticipant() {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nome do evento</Text>
      <Text style={styles.subtitle}>Sexta, 4 de fevereiro de 2023</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant name="Andres" />
      <Participant name="Ana" />
    </View>
  )
}
