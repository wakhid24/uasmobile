import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';


import {Actions} from 'react-native-router-flux';


function List({ title, harga, img }) {
  return (
    <View>
        <TouchableOpacity>
          <View style={styles.item}>

            <Image style={{width: 200 , height: 100}}  source={img} />
            <Text style={styles.judul}>{title}</Text>
            <Text style={styles.harga}>{harga}</Text>
          </View>
        </TouchableOpacity>
    </View>
  );
}



export default class Main extends React.Component {


  constructor(props) {
  super(props);
  this.state = {
    marketlist: [
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },
      {
        img: require('../images/produk/1.jpg'),
        nama: 'LS-122',
        harga: 'Rp.100.000,00'
      },

      ]
  };
}

  render() {
    return(
      <View style={{ flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 10}}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput placeholder= 'Cari disini!' style={{borderWidth: 1, borderColor: '#62757f' , borderRadius: 25 , height: 40 , fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white', marginRight: 10}} />
              <Image 
                style={{width: 30 , height: 30 , position: 'absolute', top: 5 , left: 5}}
                source={require('../images/logocari.png')} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center'}}>
              <TouchableOpacity>
              <Image 
              style={{width: 35,height: 35}}
              source={require('../images/troli.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{flexDirection: 'row' ,paddingTop: 10, backgroundColor: 'white',marginHorizontal: 17, borderRadius: 10, marginTop: 10, flexWrap: 'wrap'}}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18}}>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 40 , height: 40}}
                    source={require('../images/tas.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MAll</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 40 , height: 40}}
                    source={require('../images/hape.png')} />
                   </TouchableOpacity> 
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>PULSA</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 60 , height: 60}}
                    source={require('../images/klambi.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>FASHION</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity>
                  <Image 
                    style={{width: 60 , height: 60}}
                    source={require('../images/mangan.png')} />
                </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>FOOD</Text>
              </View>
            </View>

            <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%'}}>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 40 , height: 40}}
                    source={require('../images/games.png')} />
                   </TouchableOpacity> 
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GAMES</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 60 , height: 60}}
                    source={require('../images/diskon.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>DISKON</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 40 , height: 40}}
                    source={require('../images/tv.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>ELEKTRO</Text>
              </View>
              <View>
                <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#90a4ae', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                  <TouchableOpacity>
                  <Image 
                    style={{width: 60 , height: 60}}
                    source={require('../images/event.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>EVENT</Text>
              </View>
            </View>
          </View>
        </View>


        
          <View style={{flex: 2, marginTop: 100, justifyContent: 'center', alignItems: 'center', marginHorizontal: 17}}>
            <FlatList
            numColumns={2}
            data={this.state.marketlist}
            renderItem={obj => (
              <List img={obj.item.img} title={obj.item.nama} harga={obj.item.harga} />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          </View>
        





        

        <View style={{height: 70 ,backgroundColor: 'yellow', flexDirection: 'row'}}>
          <View style={{backgroundColor: '#69f0ae', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 30, height: 30 ,backgroundColor: 'transparent'}}>
              <Image 
              style={{width: 30 , height: 30}}
              source={require('../images/home.png')} />
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>BERANDA</Text>
          </View>
          <View style={{backgroundColor: '#00bcd4', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 30, height: 30 ,backgroundColor: 'transparent'}}>
              <Image 
              style={{width: 30 , height: 30}}
              source={require('../images/category.png')}/>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>KATEGORI</Text>
          </View>
          <View style={{backgroundColor: '#00bcd4', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 30, height: 30 ,backgroundColor: 'transparent'}}>
              <Image 
              style={{width: 30 , height: 30}}
              source={require('../images/notification.png')}/>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>NOTIFIKASI</Text>
          </View>
          <View style={{backgroundColor: '#00bcd4', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 30, height: 30 ,backgroundColor: 'transparent'}}>
              <Image 
              style={{width: 30 , height: 30}}
              source={require('../images/chat.png')}/>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>PESAN</Text>
          </View>
          <View style={{backgroundColor: '#00bcd4', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 30, height: 30 ,backgroundColor: 'transparent'}}>
              <Image 
              style={{width: 30 , height: 30}}
              source={require('../images/user.png')}/>
            </View>
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>AKUN</Text>
          </View>
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  


});