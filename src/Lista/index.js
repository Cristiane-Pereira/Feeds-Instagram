import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  areaFeed: {},
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: "left",
    color: "#000000",
    paddingLeft: 10,
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  iconeLike: {
    width: 28,
    height: 28,
  },
  btnSend: {
    paddingLeft: 5,
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30
  },
  nomeRodape: {
    fontWeight: "bold",
    paddingLeft: 5,
    fontSize: 18,
  },
  descricaoRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.mostraLikes = this.mostraLikes.bind(this);
    this.likes = this.likes.bind(this);
  }

  mostraLikes(likers) {
    let feed = this.state.feed;

    if (feed.likers <= 0) {
      return;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers}
        {feed.likers <= 1 ? " Curtida" : " Curtidas"}
      </Text>
    );
  }

  likes() {
    let feed = this.state.feed;

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
         }
      });
    }else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1
         }
      });

    }
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgperfil }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
        </View>

        <Image
          resizeMode="cover"
          source={{ uri: this.state.feed.imgPublicacao }}
          style={styles.fotoPublicacao}
        />

        <View style={styles.areaBtn}>
          <TouchableOpacity onPress={this.likes}>
            <Image
              source={this.state.feed.likeada ? require('../img/likeada.png') : require('../img/like.png')}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image
              source={require("../img/send.png")}
              style={styles.iconeLike}
            />
          </TouchableOpacity>
        </View>

        {this.mostraLikes(this.state.feed.likers)}

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descricaoRodape}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

export default Lista;
