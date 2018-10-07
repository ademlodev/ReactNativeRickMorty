import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { TextInput, Button } from "../../widgets";
import styles from "./styles";
import ImagePicker from "react-native-image-picker";
import * as Colors from "../../../commons/colors";

export default class extends Component {
  constructor(props) {
    super(props);

    if (props.isEdit && props.character) {
      this.state = {
        name: props.character.name,
        status: props.character.status,
        species: props.character.species,
        location: props.character.location.name,
        image: { preview: { uri: props.character.image } }
      };
    } else {
      this.state = {
        name: "",
        status: "",
        species: "",
        location: "",
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
    const { name, status, species, location, image } = this.state;
    if (name && status && species && location && image) {
      return true;
    } else {
      return false;
    }
  }

  _onSubmit() {
    if (this._validateForm()) {
      const { name, status, species, location, image } = this.state;
      if (this.props.isEdit) {
        const characterId = this.props.character.id;
        const imageData = this.state.image
          ? { image: this.setState.iamge }
          : {};
        const data = {
          ...imageData,
          name: name,
          status: status,
          species: species,
          location: location
        };
        // FUNCION PARA HACER PATCH
        //this.props.onSubmitCharacter(data)
      } else {
        const data = {
          name: name,
          status: status,
          species: species,
          location: location,
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
      <ScrollView style={styles.container}>
        <View style={styles.firstElement}>
          <TextInput
            label={"Name:"}
            placeholder={"name"}
            placeHolderColor={Colors.secondaryText}
            value={this.state.name}
            onChangeText={name => this.setState({ name })}
            inputStyle={styles.textInput}
            labelStyle={styles.textLabel}
            containerStyle={styles.textContainer}
          />
        </View>
        <View>
          <TextInput
            label={"Status:"}
            placeholder={"status"}
            placeHolderColor={Colors.secondaryText}
            value={this.state.status}
            onChangeText={status => this.setState({ status })}
            inputStyle={styles.textInput}
            labelStyle={styles.textLabel}
            containerStyle={styles.textContainer}
          />
        </View>
        <View>
          <TextInput
            label={"Species:"}
            placeholder={"species"}
            placeHolderColor={Colors.secondaryText}
            value={this.state.species}
            onChangeText={species => this.setState({ species })}
            inputStyle={styles.textInput}
            labelStyle={styles.textLabel}
            containerStyle={styles.textContainer}
          />
        </View>
        <View>
          <TextInput
            label={"Location:"}
            placeholder={"location"}
            placeHolderColor={Colors.secondaryText}
            value={this.state.location}
            onChangeText={location => this.setState({ location })}
            inputStyle={styles.textInput}
            labelStyle={styles.textLabel}
            containerStyle={styles.textContainer}
          />
        </View>
        <View style={styles.spaceBetweenElements}>
          {this._renderImageInput()}
        </View>

        <View style={styles.spaceBetweenElements}>
          <Button
            label="Save"
            onPress={() => this._onSubmit()}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
          />
        </View>
      </ScrollView>
    );
  }
}
