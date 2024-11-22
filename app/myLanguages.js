
import { FlatList, View } from "react-native";
import Language from "../components/language.js";
import jsLogo from '../assets/jsLogo.png';
import javaLogo from '../assets/javaLogo.jpg';
import pythonLogo from '../assets/pythonLogo.png';
import rustLogo from '../assets/rustLogo.png';

const languages = [
  {
    id: 1,
    title: 'JavaScript',
    expirience: 'Nothing',
    imageSrc: jsLogo,
  },
  {
    id: 2,
    title: 'Java',
    expirience: 'Absolutely Nothing',
    imageSrc: javaLogo,
  },
  {
    id: 3,
    title: 'Python',
    expirience: 'Ultra Mega Nothing',
    imageSrc: pythonLogo,
  },
  {
    id: 4,
    title: 'Rust',
    expirience: 'Is this a game?',
    imageSrc: rustLogo,
  },
];

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={languages}
        renderItem={({item}) => <Language { ...item } />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
