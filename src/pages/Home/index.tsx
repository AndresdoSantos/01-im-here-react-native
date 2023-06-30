import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

const PARTICIPANTS = ['Andres', 'Rodrigo', 'Ana', 'Mayke', 'Diego']

export function Home() {
  function handleAddParticipant() {
    if (PARTICIPANTS.includes('Andres')) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante na lista com esse nome.',
      )
    }
  }

  function handleRemoveParticipant(name: string) {
    return Alert.alert('Remover', 'Deseja mesmo remover esse participante?', [
      {
        text: 'Sim',
        onPress: () => Alert.alert('Deletado!'),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

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
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
      />
    </View>
  )
}
