import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-carousel-view';
import { Video } from 'expo';
import { MaterialIcons } from '@expo/vector-icons';

const deviceHeight = (Dimensions.get('window').height);

const styles = StyleSheet.create({
    container: {
      flex: 0.5,
    },
    icon: {
        width: 300,
        height: 300,
        marginLeft: 30,
    },
    textTitle: {
        color: '#4f603c',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
    },
    text: {
        color: '#4f603c',
        fontSize: 15,
        marginTop: 5,
    },
    contentContainer: {
        borderWidth: 2,
        borderColor: '#CCC',
        flex: 1,
    },
     controlBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: 375,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }
  });
export default class Multimedia extends React.Component{
    static navigationOptions = {
        title: 'Multimedia',
    };
    state = {
        mute: true,
        shouldPlay: true,
      }

      handlePlayAndPause = () => {  
        this.setState((prevState) => ({
           shouldPlay: !prevState.shouldPlay  
        }));
      }
      
      handleVolume = () => {
        this.setState(prevState => ({
          mute: !prevState.mute,  
        }));
      }
    render() {
        const { width } = Dimensions.get('window');
      return (
        <View>
            <View style={styles.container}>
            <Carousel
            width={375}
            height={deviceHeight}
            showIndicators={true}   
            animate={false}
            pageInfo={true}
            indicatorAtBottom={false}
            indicatorSpace= {10}
            indicatorSize={15.5}
            indicatorText="✽"
            indicatorColor= '#D98282'
            handleVolume
            >
            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Name</Text>
                    <Video
                        source={{ uri:'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/%C2%A1Lleva%20una%20alimentaci%C3%B3n%20saludable!%20El%20Chef%20Manuel%20Tuz%20de%20la%20Escuela%20de%20Gastro....mp4?alt=media&token=5bd4fdeb-9ca5-4d19-9f9d-d7a95400132b' }}
                            shouldPlay={this.state.shouldPlay}
                            resizeMode="contain"
                            style={{ 
                                width: 375,
                                height: 300, 
                            }}
                        isMuted={this.state.mute}
                    />
                    <View style={styles.controlBar}>
                        <MaterialIcons
                            name={this.state.mute ? "volume-mute" : "volume-up"}
                            size={45}
                            color="white"
                            onPress={this.handleVolume}
                        />
                        <MaterialIcons
                            name={this.state.shouldPlay ? "pause" : 
                                "play-arrow"}
                            size={45}
                            color="white"
                            onPress={this.handlePlayAndPause}
                        />
                    </View>
                </View>
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.container}>
                <View>
                    <Text style={styles.textTitle}>Name</Text>
                    <Video
                        source={{ uri:'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/EL%20chef%20Manuel%20Tuz%20nos%20ense%C3%B1a%20a%20preparar%20una%20tilapia%20marinada%20al%20or%C3%A9gano%20en%20u....mp4?alt=media&token=a4a3f07e-7621-4902-b8af-165b5d87f0ff' }}
                            shouldPlay={this.state.shouldPlay}
                            resizeMode="contain"
                            style={{ 
                                width: 375,
                                height: 300, 
                            }}
                        isMuted={this.state.mute}
                    />
                    <View style={styles.controlBar}>
                        <MaterialIcons
                            name={this.state.mute ? "volume-mute" : "volume-up"}
                            size={45}
                            color="white"
                            onPress={this.handleVolume}
                        />
                        <MaterialIcons
                            name={this.state.shouldPlay ? "pause" : 
                                "play-arrow"}
                            size={45}
                            color="white"
                            onPress={this.handlePlayAndPause}
                        />
                    </View>
                </View>
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            
            
            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                  <Image 
                      style={styles.icon}
                      source={{
                      uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish1.jpeg?alt=media&token=6ef9a936-d83e-4d4d-ac20-abc53548d2fd.jpeg'
                      }}
                  />
                  <Text style={styles.text}>
                      Calories:
                  </Text>
                  <Text style={styles.text}>
                      Ingredients:
                  </Text>
              </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish2.jpeg?alt=media&token=6eec6606-28fd-4411-a5d1-a696e9bd3423.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish3.jpeg?alt=media&token=70830a91-186c-4205-b64f-93b061eafc85.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish4.jpeg?alt=media&token=8eda5afe-1bbe-4308-9f59-a0e266505316.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish5.jpeg?alt=media&token=aa36c812-463d-4bf7-966e-3f995535bdda.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish6.jpeg?alt=media&token=882f0db5-15d9-438f-9449-1d199e098a47.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish7.jpeg?alt=media&token=a8c6c3ad-1412-4738-b38a-726551554029.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish8.jpeg?alt=media&token=c5efe9fa-1093-4edb-beb5-f122570315be.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish9.jpeg?alt=media&token=a6df7597-01bd-4bd0-82cb-5b920c34d742.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish10.jpeg?alt=media&token=845fe21d-dfef-4fef-9b35-0400de512829.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish11.jpeg?alt=media&token=f381f095-5a60-48b2-9bcb-0c0493a5bd01.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish12.jpeg?alt=media&token=aae73102-3f87-4105-8418-c8d7c6f541fe.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish13.jpeg?alt=media&token=b83c8631-145e-43ae-bfd8-073a819cca6b.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish14.jpeg?alt=media&token=986fdf51-dd83-4f02-a731-22f9b1a8d650.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.textTitle}>Name</Text>
                <Image 
                    style={styles.icon}
                    source={{
                    uri: 'https://firebasestorage.googleapis.com/v0/b/proyecto-92f5c.appspot.com/o/dish15.jpeg?alt=media&token=a07df426-9e77-4c00-a46a-e9cf79958b3c.jpeg'
                    }}
                />
                <Text style={styles.text}>
                    Calories:
                </Text>
                <Text style={styles.text}>
                    Ingredients:
                </Text>
            </View>

        </Carousel>
        </View>
    </View>
    );
    }
  }
  