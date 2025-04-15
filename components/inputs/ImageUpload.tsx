import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SimpleLineIcons } from '@expo/vector-icons';

interface ImageUploadProps {
  image: string | null;
  setImage: (uri: string | null) => void;
  label?: string;
  placeholder?: string;
}

const ImageUpload = ({ 
  image, 
  setImage, 
  label = "Upload Profile Picture",
  placeholder = "Add Photo" 
}: ImageUploadProps) => {
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      alert('Permission to access gallery is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View className="mt-4 items-center">
      <TouchableOpacity onPress={pickImage} className="items-center">
        <View className="h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-[#009E20]">
          {image ? (
            <Image source={{ uri: image }} className="h-full w-full border border-black" />
          ) : (
            <SimpleLineIcons name="cloud-upload" size={32} color="#ffffff" />
          )}
        </View>
        <Text className="mt-2 text-[#92c930] text-regular">{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageUpload;