import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

const PARTICIPANTS = ['Andres', 'Rodrigo', 'Ana', 'Mayke', 'Diego']

export function Home() {
  function handleAddParticipant() {}

  function handleRemoveParticipant(name: string) {}

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

      <FlatList
        data={PARTICIPANTS}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpty}>Ninguém chegou no evento.</Text>
        )}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleRemoveParticipant('Andres')}
          />
        )}
      />
    </View>
  )
}
