import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { TextInput, Button } from "../../widgets";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";

export default class extends Component {
  constructor(props) {
    super(props);

    if (props.isEdit && props.character) {
      this.state = {
        name: props.character.name,
        gender: props.character.gender,
        image: { preview: { uri: props.character.image } }
      };
    } else {
      this.state = {
        name: "",
        gender: "",
        image: null
      };
    }

    options = {
      title: "Select Avatar",
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
  }

  _renderImageInput() {
    const imageLabel = this.state.image
      ? "Push to select another image"
      : "Push to select image *";
    const imageUri = this.state.image ? this.state.image.preview : null;

    return (
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => this._onImagePickerTapped()}
        >
          <Image source={imageUri} style={styles.image} resizeMode={"cover"} />
          <Text style={styles.imageText}>{imageLabel}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _onImagePickerTapped() {
    ImagePicker.showImagePicker(this.options, response => {
      console.log("ImagePicker  ", response);
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        let preview = { uri: response.uri };
        this.setState({
          image: { preview }
        });
      }
    });
  }

  _validateForm() {
    const { name, gender, image } = this.state;
    if (name && gender && image) {
      return true;
    } else {
      return false;
    }
  }

  _onSubmit() {
    if (this._validateForm()) {
      const { name, gender, image } = this.state;
      if (this.props.isEdit) {
        const characterId = this.props.character.id;
        const imageData = this.state.image
          ? { image: this.setState.iamge }
          : {};
        const data = {
          ...imageData,
          nombre: name,
          edad: gender
        };
        // FUNCION PARA HACER PATCH
        //this.props.onSubmitCharacter(data)
      } else {
        const data = {
          nombre: name,
          edad: gender,
          image: image
        };
        this.props.onSubmitCharacter(data);
      }
    } else {
      Alert.alert("Attention", "Complete every fields");
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingTop: 10 }}>
          <TextInput
            label={"Character Name:"}
            placeholder={"name"}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            inputStyle={{ backgroundColor: "white" }}
            labelStyle={{ padding: 10 }}
            containerStyle={{ padding: 20 }}
          />
        </View>
        <View style={{}}>
          <TextInput
            label={"Character gender:"}
            placeholder={"gender"}
            value={this.state.gender}
            onChangeText={gender => this.setState({ gender })}
            inputStyle={{ backgroundColor: "white" }}
            labelStyle={{ padding: 10 }}
            containerStyle={{ padding: 20 }}
          />
        </View>
        <View style={{ paddingHorizontal: 20, paddingBottom: 20 }}>
          {this._renderImageInput()}
        </View>
        <View style={{ padding: 20 }}>
          <Button label="Guardar" onPress={() => this._onSubmit()} />
        </View>
      </View>
    );
  }
}
