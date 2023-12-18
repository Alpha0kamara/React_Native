import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

let movies = [
  {name:"Pikachu", file:"https://purepng.com/public/uploads/large/purepng.com-pokemonpokemonpocket-monsterspokemon-franchisefictional-speciesone-pokemonmany-pokemonone-pikachu-1701527784461wwww7.png", year:2002},
  {name:"Jurassic Park", file:"https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg", year:2008},
  {name:"Finding Nemo", file:"https://lumiere-a.akamaihd.net/v1/images/p_findingnemo_19752_05271d3f.jpeg?region=0%2C0%2C540%2C810", year:1990},
  {name:"Ringu", file:"https://m.media-amazon.com/images/M/MV5BYjNjMWNhZjctYmQzYS00M2ZmLWEzZTktZTJjZDI0NmM0MmMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg", year:1998},
  {name:"Avengers", file:"https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810", year:2022},
  {name:"Akira", file:"https://m.media-amazon.com/images/M/MV5BM2ZiZTk1ODgtMTZkNS00NTYxLWIxZTUtNWExZGYwZTRjODViXkEyXkFqcGdeQXVyMTE2MzA3MDM@._V1_FMjpg_UX1000_.jpg", year:2020},
]

const shuffle = (movies: any[]) => {
  movies = movies.sort(()=>Math.random() - 0.5);
}
const movieInfo = (movie: any) => {
  Alert.alert(movie.name, movie.year)
}
export default function App() {
  shuffle(movies)
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity 
      onPress={()=>{movieInfo(movies[0])}}>
      <Image source={{uri:movies[0].file}}/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
