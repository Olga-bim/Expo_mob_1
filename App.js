import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  // Список картинок с названиями
  const images = [
    { source: require('./assets/adaptive-icon.png'), name: 'Adaptive Icon' },
    { source: require('./assets/favicon.png'), name: 'Favicon' },
    { source: require('./assets/icon.png'), name: 'Icon' },
    { source: require('./assets/splash.png'), name: 'Splash' },
    { source: require('./assets/girl.jpg'), name: 'Girl' },
  ];

  // Состояние для текущей выбранной картинки
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Функция для выбора картинки
  const handleImageSelect = (image) => {
    setSelectedImage(image); // Устанавливаем выбранную картинку в состояние
  };

  return (
    <View style={styles.container}>
      {/* Выбранная картинка и её название */}
      <View style={styles.selectedImageContainer}>
        <Image source={selectedImage.source} style={styles.selectedImage} />
        <Text style={styles.selectedImageName}>{selectedImage.name}</Text>
      </View>

      {/* Список картинок для выбора */}
      <ScrollView style={styles.imageList}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => handleImageSelect(image)}>
            <View style={styles.imageItem}>
              <Image source={image.source} style={styles.imageThumbnail} />
              <Text style={styles.imageName}>{image.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  selectedImageContainer: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 30,
  },
  selectedImage: {
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedImageName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  imageList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 10,
  },
  imageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  imageThumbnail: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 20,
  },
  imageName: {
    fontSize: 18,
    color: '#333',
  },
});
